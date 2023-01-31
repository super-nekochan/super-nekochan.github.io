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
<body>
  <header>
    <h1>Super-address</h1>
  </header>

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



<!--
<tweet>tweetタグのテスト</tweet> 
testページ [test](https://www.rollingstone.com/music/music-features/nirvana-kurt-cobain-ai-song-1146444/) 

 End flex-container 
動画コンテンツだおら

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=R4Fpr7wzkvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->