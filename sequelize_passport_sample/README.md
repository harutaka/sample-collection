# sequelize_passport_sample
Usernameとpasswordを用いた認証と、DB操作機能を搭載したexpressベースのWebアプリサンプルである。

## 環境構築
以下のコマンドにて構築。  

```
express --view=ect dbapp
npm install
npm audit fix
npm i -D sequelize sqlite3 ect

sqlite3 dpapp.db
create table books (bookid integer primary key, name text, price integer);
insert into books (bookid, name, price) values (1, 'apple', 100);
insert into books (bookid, name, price) values (2, 'grape', 200);
insert into books (bookid, name, price) values (3, 'melon', 300);

create table users (username text primary key, password text);
insert into users (username, password) values ('admin', 'admin');
insert into users (username, password) values ('sbu', 'sbu');

npm i -D passport
npm i -D passport-local
```

## 認証
passport-localを用いたUsernameとpasswordでのローカル認証である。  
サンプルでは/loginにアクセスし、admin/admin or sbu/sbuでログインすればindexへ飛ぶ。  
それ以外ならログイン画面にリダイレクトする  

## DB操作
DBの各種操作サンプルはsample.js参照。