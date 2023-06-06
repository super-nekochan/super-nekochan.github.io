// super_address.FUNCTION でアクセスできる関数を定義する
// 辞書式の変数 の下に 関数が定義されている状態なので
// 関数の名前の設定の仕方が通常と異なる点に注意が必要
// 通常は function FUNCTION(){} と書くが、
// ここでは FUNCTION: function(){} と書く
var super_address = {
  // アンダースコアで始まる変数は、外部からのアクセスを想定していない（できなくはないけど）
  _submit_url  : "http://api.super-nekochan.com:8000/submit/",
  _results_url : "http://api.super-nekochan.com:8000/result/",

  // waitSec 秒間待機し、callbackFunc を実行する
  sleep: function (waitSec, callbackFunc) {
    let spanedSec = 0; // 経過時間（秒）
    let id = setInterval(function () {  // 1秒間隔で無名関数を実行
      spanedSec++;
      if (spanedSec >= waitSec) { // 経過時間 >= 待機時間の場合、待機終了。
        clearInterval(id);   // タイマー停止
        if (callbackFunc) callbackFunc(); // 完了時、コールバック関数を実行
      }
    }, 1000);
  },

  // 入力されたアドレスリストをサーバに送信し
  // サーバからの返答として query ID を取得する
  post_address: async function(address_object){
    console.log(address_object);
    const result = await fetch(this._submit_url, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(address_object)
    })
    .then(response => response.text()) // サーバからの返答のうち、返ってきたデータそのものを取得
    .catch((error) => {
      return console.log("error");
    })

    return result;
  },

  get_results: function(q_id){
    var url = this._results_url+q_id;
    console.log(url); 
    const result = fetch(url, {
      // mode: "no-cors"
    })
    .then(response => {console.log(response);return response.text();})
    .catch(err => console.error(err));
    return result;
  },
  address_file:function(){
    const input_file = document.getElementById("input_address_file")
  }
}