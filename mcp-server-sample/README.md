# mcp-server-sample

## 環境構築方法
uvを使って環境構築を行います。

### uvのインストール
公式サイトを参考に、uvをインストールします。
https://docs.astral.sh/uv/

```bash
$ curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 仮想環境の構築
次に仮想環境を構築します。以下コマンドを実行します。

```bash
$ uv sync
```

コマンドを実行すると、.venvディレクトリが生成されます。これが仮想環境名となります。

本開発で使用する環境変数を.envに設定します。例えば以下のように設定します。

```
AWS_DEFAULT_REGION = us-east-1
```

### ライブラリの更新
ライブラリを追加・削除する場合は、以下コマンドを実行します。  
実行した時点で同期も行われます。

```bash
$ uv add <ライブラリ名>  # ライブラリを追加
$ uv remove <ライブラリ名>  # ライブラリを削除
```

開発用のライブラリを追加する場合は、toolを使いコマンド別管理します。
以下の例では、ライブラリとしてruffを追加しています。

```bash
$ uv tool install ruff  # 追加
$ uv tool run ruff check main.py  # 実行
$ uv tool upgrade ruff  # 更新
$ uv tool uninstall ruff  # 削除
```

toolに関しては、`uvx`コマンドを使用することで、インストールしなくても実行できます。  
(uvxは`uv tool run`のエイリアスです。)

```bash
$ uvx ruff check main.py  # 実行
```

### アプリ実行方法
ディレクトリを移動した時点で、miseの機能により仮想環境に入ります。
なので以下のように実行します。

```bash
$ uv run main.py
```

### 仮想環境の削除
仮想環境を１から作り直したい場合などは、仮想環境を削除するか別名称の仮想環境を作成することを勧めます。
仮想環境の削除については、仮想環境フォルダ（今回の場合はフォルダ名：.venv）を削除すれば完了です。
