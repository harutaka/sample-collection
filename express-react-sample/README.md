# express-react-sample
フロントエンドにreact、バックエンドにexpressを採用し、  
同時に開発するサンプル。  

## 必要な環境とバージョン
* Nodejs
  * 10.16.1

## 使い方
`npm run build`を実行すると、srcディレクトリの中身を変換し、  
成果物をdistディレクトリに配置する。

`npm start`を実行すると、バックエンドのサーバー(express, port:3001)が起動する。  

`npm run client`を実行すると、フロントエンドのサーバー(react, port:3000)が起動する。  

`npm run dev`を実行すると、バックエンド及びフロントエンドのサーバーが同時に起動する。  

またclientディレクトリ上で`npm start`を実行すると、フロントエンドのサーバーが起動する。

