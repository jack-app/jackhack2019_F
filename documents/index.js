// nodeのコアモジュールのhttpを使う
//var：変数代入　
//require ライブラリの読み込み
var http = require('http');
//httpライブラリの関数を読み込む
var server = http.createServer();

//server.on イベントハンドラ requestがおこったら関数を実行する
//req:request  res:response
server.on('request', function(req, res) {
  //200番は成功したってこと　ステータスコードといいます
//テキストのタイプはただのテキストだっていうこと
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    //成功した場合この文字列を返しますよ
    res.write('hello world');
    //おわり
    res.end();
});

// サーバを待ち受け状態にする
// 第1引数: ポート番号
// 第2引数: IPアドレス
//http://localhost:3000/　ってURL検索するとみれる
//80のときはhttp://Localhost だけどみれる
//80番のポートに向かってなげている。阿部寛のサイトの後ろに:80ってつけてもいくよ
server.listen(80);

  /*
  これでもいいらしい
  $ npm install express --save
  これをインストールしてから（コンソール

  const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
*/
