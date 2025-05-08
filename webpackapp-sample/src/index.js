// import 文を使って sub.js ファイルを読み込む。
import { hello } from "./sub";
import "./style.scss";

document.getElementById('hoge').textContent = hello();