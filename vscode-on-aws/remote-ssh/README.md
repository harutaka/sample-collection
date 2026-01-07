# SSM を使った Remote-SSH 拡張機能セットアップ方法

VSCode の Remote-SSH 拡張機能を使って、EC2 インスタンスに 接続します。通常は EC2 のキーペア(pem ファイル)を使用して接続することが多いですが、管理が大変なのでキーペアを作成せず、SSM Session Manager を使って接続する方法をまとめます。

## EC2 の構築
### ネットワークの構築
1から環境を構築する場合は、以下の手順で実施します。

* VPCの構築
* サブネットの構築。EC2をパブリックサブネットに置く場合は、パブリックのみ。プライベートサブネットに置く場合はパブリックとプライベート両方必要です。
* インターネットゲートウェイの構築し、VPCにアタッチ
* (EC2をプライベートサブネットに置く場合は、NatGatewayをパブリックサブネットに構築)
* ルートテーブルの構築。パブリック用はインターネットゲートウェイに、プライベート用はNatGatewayにつなげる。
* セキュリティグループを構築。VPC内の通信を許可する。
* VPCエンドポイント(EC2 Instance Connect Endpoint)を構築。上記リソースを設定する。

### EC2 の作成

1. IPアドレスの設定
   外と通信するには、IPアドレスの割り当てが必要です。パブリックサブネットにEC2を配置する場合は、パブリックIPを自動割り当てにします。プライベートサブネットに配置する場合は、NatGatewayのIPアドレスになるので、パブリックIPの割り当ては不要です。

2. Systems Manager エージェントの導入
   Amazon Linux 系か Ubuntu Server であれば、デフォルトで Systems Manager エージェント（SSM Agent）がインストールされているので、設定不要です。これ以外の OS の場合は手動でエージェントを導入する必要がありますので要注意。
   https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/ami-preinstalled-agent.html

3. IAM プロファイルの設定
   EC2 インスタンスを作成する際に IAM プロファイル(EC2 用の IAM ロール)を設定します。
   以下のポリシーをアタッチしたロールを事前に作っておけば OKです。

- AmazonSSMManagedInstanceCore

4. 開始スクリプトの設定
   EC2 インスタンスの起動時に実行するスクリプトを設定します。
   `userdata.sh` をアップロードするか、その内容をコンソールのフォームに貼り付けてください。

5. ユーザーの設定
   EC2 インスタンス起動後に、ユーザーを作成します。
   マネジメントコンソールより、対象のインスタンスに接続し、セッションマネージャーより以下のコマンドを実行します。

```bash
$ sudo useradd --shell /bin/bash --create-home <username>
$ sudo passwd <username>
$ sudo gpasswd -a <username> sudo
$ sudo gpasswd -a <username> docker

$ sudo update-alternatives --config editor  # デフォルトエディタを変更(筆者はnanoからvimへ)
```

## Windows

### ツールのインストール

AWSCLI と SessionManagerPlugin をインストールします。
インストール直後はパスが通っていないので、再起動します。

```
$ winget install -e --id=Amazon.AWSCLI
$ winget install -e --id=Amazon.SessionManagerPlugin
```

### aws の初期設定

IAM ユーザに対してアクセスキーを発行しておきます。

次に、コマンドプロンプトで以下のコマンドを実行し、プロファイルを作成します。
プロファイル名の部分は、お好きな任意のプロファイル名を指定してください。

```
$ aws configure --profile [プロファイル名]
AWS Access Key ID [None]: [アクセスキーIDを入力]
AWS Secret Access Key [None]: [シークレットアクセスキーを入力]
Default region name [None]: ap-northeast-1
Default output format [None]:[何も入力せずEnter]
$ aws sts get-caller-identity --profile [プロファイル名]  # 確認
```

### SSH 接続スクリプトの作成

Windows の場合、~/.ssh/にて ssm-proxy.ps1 ファイルを作成し、下記のスクリプトを作成します。

- PUBLIC_KEY_PATH: 自分の公開鍵のパス (例：id_rsa.pub)
- <username>: Windows のユーザー名

```ps1
$PUBLIC_KEY_PATH="file://C:\Users\<username>\.ssh\id_rsa.pub"

$ssh_user = $args[0]
$ssh_port = $args[1]
$ec2_instance_id = $args[2]
$aws_profile=$args[3]
$avalability_zone=$args[4] # リージョンではなくAZを指定する

aws ec2-instance-connect send-ssh-public-key `
    --instance-id "$ec2_instance_id" `
    --availability-zone "$avalability_zone" `
    --instance-os-user "$ssh_user" `
    --ssh-public-key "$PUBLIC_KEY_PATH" `
    --profile "$aws_profile"

aws ssm start-session `
  --target "$ec2_instance_id" `
  --document-name 'AWS-StartSSHSession' `
  --parameters "portNumber=$ssh_port" `
  --profile "$aws_profile"
```

初期設定では、powershellでのスクリプトの実行が許可されていないため、管理者権限で以下を実行します。

```powershell
$ Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

### SSH Config の設定

SSH Config に以下の設定を追加します。
User の値を適宜変更してください。

Mac の場合、~/.ssh/config に以下の設定を追加します。

- <hostname>: 任意のホスト名
- <username>: Windows のユーザー名
- <instance id>: 接続先の EC2 インスタンスの ID
- <aws profile>: AWS のプロファイル名
- <availability zone> 接続先の EC2 インスタンスの AZ (例：ap-northeast-1a)
- <ec2username>: EC2 インスタンスのユーザー名(Ubuntu の場合、デフォルトは ubuntu)

```
Host <hostname>
    ProxyCommand C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy Bypass -File C:\Users\<username>\.ssh\ssm-proxy.ps1 %r %p <instance id> <aws profile> <availability zone>
    User <ec2username>
    ForwardAgent yes
    UserKnownHostsFile /dev/null
    StrictHostKeyChecking no
```

## Mac/Linux

### ツールのインストール

Homebrew でインストールします。

```
$ brew install awscli session-manager-plugin
```

### aws の初期設定

IAM ユーザに対してアクセスキーを発行しておきます。
Windows の同項目を参照してください。

### SSH 接続スクリプトの作成

Mac の場合、~/.ssh/にて ssm-proxy.sh ファイルを作成し、下記のスクリプトを作成します。

- PUBLIC_KEY_PATH: 自分の公開鍵のパス (例：id_rsa.pub)
- <username>: Mac のユーザー名

```bash
#!/bin/bash

PUBLIC_KEY_PATH=file:///Users/<username>/.ssh/id_rsa.pub

USER=$1
PORT=$2
INSTANCE_ID=$3
AWS_PROFILE=$4
AVAILABILITY_ZONE=$5

aws ec2-instance-connect send-ssh-public-key \
    --instance-id ${INSTANCE_ID} \
    --availability-zone ${AVAILABILITY_ZONE} \
    --instance-os-user ${USER} \
    --ssh-public-key ${PUBLIC_KEY_PATH} --profile ${AWS_PROFILE} > /dev/null;

aws ssm start-session --profile ${AWS_PROFILE} \
    --target ${INSTANCE_ID} --profile ${AWS_PROFILE}  \
    --document-name AWS-StartSSHSession --parameters portNumber=${PORT}
```

権限を付与します。

```bash
$ chmod +x ~/.ssh/ssm-proxy.sh
```

### SSH Config の設定

SSH Config に以下の設定を追加します。
User の値を適宜変更してください。

Mac の場合、~/.ssh/config に以下の設定を追加します。

- <hostname>: 任意のホスト名
- <instance id>: 接続先の EC2 インスタンスの ID
- <aws profile>: AWS のプロファイル名
- <availability zone> 接続先の EC2 インスタンスの AZ (例：ap-northeast-1a)
- <ec2username>: EC2 インスタンスのユーザー名(Ubuntu の場合、デフォルトは ubuntu)

```
Host <hostname>
    ProxyCommand sh -c "~/.ssh/ssm-proxy.sh %r %p <instance id> <aws profile> <availability zone>"
    User <ec2username>
    ForwardAgent yes
    UserKnownHostsFile /dev/null
    StrictHostKeyChecking no
```

## 接続確認
VSCodeの場合、Remote-SSH拡張機能を使用します。
Shift + Command/Control + Pを押下し、Remote-SSH: Connect to Host...を選択します。
続いて、先程作成したSSH Configの<hostname>を選択すれば接続できます。

## 別の接続方法
Tailscaleを使用するとプライベートVPNを構築でき、より簡単にセットアップできます。Tailscaleのセットアップは完了していることを前提とすると、以下の手順で接続できます。

1. EC2の構築までは同様の手順で実施します。
2. Tailscaleの管理者画面行って、デバイスを追加する画面に行きます。
3. インストールスクリプトをコピーします。
4. セッションマネージャーで、対象のEC2にログインし、インストールスクリプトを実行します。
5. `tailscale up --ssh`を実行し、SSH接続可能にします。
6. Tailscaleの管理者画面で、マシン名を任意の名称に変更します。

上記設定完了後は、ローカルのマシンで`ssh <マシン名>`を実行すると、SSH接続できます。

## その後の設定
以降は、ユーザー毎の設定です。
ご自由に設定してください。
筆者推奨の設定は、[ユーザー毎のセットアップ](user_settings.md) を参照してください。
