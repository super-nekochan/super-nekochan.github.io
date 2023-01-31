---
layout: post
read_time: false
show_date: false
title: "super-address"
date: 2022-08-14
img: posts/20220814/nihon.jpg
tags: [copyright]
category: opinion
author: Super Nekochan
description: "住所正規化サービス"
enable: true
---
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="js/super_address.js"></script>
<body>
  <div class="container">
    <div class="form">
      <h2>住所正規化</h2>
        <textarea class="input_address" id="address_input" placeholder="正規化したい住所を入力してください(5箇所以上はcsv,xlsx,xlsファイルをアップロードしてください)" ></textarea>
        <textarea readonly class="output_address" id="output_input" placeholder="出力欄" ></textarea>
      <h2 class="margin_text">CSVおよびエクセルファイルをアップロード</h2>
        <input class="input_address_file" type="file" accept=".csv,	.xlsx, .xls">
      <br>
      <br>
      <button class="button" type="button" onclick="buttonClick()">実行</button>
      </div>
    </div>

</body>
<script>
  async function buttonClick(){    
  const address_1 = document.getElementById('address_input').value;
  const address_split = address_1.split(/\n/);
  let address_keyvalue = new Array(address_split.length);
  for(let address_num = 0; address_num<address_split.length; address_num++){
    address_keyvalue[address_num] = {address:address_split[address_num]};
  }
  let input_quantity = address_keyvalue.length;
  console.log("入力数"+input_quantity);
  // 住所正規化APIを実行
  let result_string = await super_address.post_address(address_keyvalue); 
  const ret_dict = JSON.parse(result_string);
  let q_id = ret_dict["result"];
  setTimeout(await get_result_func(q_id,input_quantity),10000);
async function get_result_func(q_id,input_quantity){
  const results_output = await super_address.get_results(q_id);
  console.log(results_output);
  const results_parse=JSON.parse(results_output);
  let status_num = results_parse["status"];
  let status_message = results_parse["message"];
  switch(status_num){
    case 0:
      document.getElementById("output_input").value="";
      for(let i = 0; i<=input_quantity-1;i++ ){
        const results_view = results_parse["results"][i]["address"]; 
        document.getElementById("output_input").value += results_view +"\n";
      }
      break;
    case 1:
      document.getElementById("output_input").value = "状態コード:"+status_num +"\n"+"現在処理中"
      setTimeout(await get_result_func(q_id,input_quantity),10000);
      break;
    default:
      document.getElementById("output_input").value = "状態コード:"+status_num +"\n"+status_message;
      break;
    }
  }
}
</script>


<!--
<tweet>tweetタグのテスト</tweet> 
testページ [test](https://www.rollingstone.com/music/music-features/nirvana-kurt-cobain-ai-song-1146444/) 

 End flex-container 
動画コンテンツだおら

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=R4Fpr7wzkvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->