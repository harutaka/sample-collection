# docker-react-express-sample
docker-composeを用い、フロントエンドにreact、  
バックエンドにexpressを採用したWebアプリを同時起動するサンプルである。  

## 必要な環境とバージョン
* Docker
  * 19.03.1
* docker-compose
  * 1.24.1

## 使い方
docker-compose.yamlがあるディレクトリにて、以下コマンドを実行する。  

```
docker-compose up
```

すると、ホスト側の3001ポートでバックエンドのexpressのアプリが起動し、  
3000ポートでフロントエンドのreactアプリが起動する。  
reactアプリはバックエンドのAPIと連携して表示する。  

## 参考
出来上がった後に似たような構成を見つけました。ご参考に。  
https://github.com/mrcoles/node-react-docker-compose