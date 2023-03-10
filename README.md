# シラバス検索システム

私の所属する大学のシラバスを検索するシステムです。

# 動作イメージ


https://user-images.githubusercontent.com/62312581/215499033-b7db9028-5da2-4bc4-8c4e-af80a4178675.mp4




## 機能
- 高速かつ検索しやすいシラバス検索システム
- カテゴリから検索（学類→大分類→小分類）. 
- 講義名検索. 

## やらなくていいこと
- シラバスの登録機能  
- ユーザ認証. 

## 動機

- 大学のシステムでのシラバス参照サイトが重すぎるから. 
- 現在のシステムは次のページに遷移するのに10秒以上時間がかかる  
- 時間割を作る際にシラバス検索をするが、時限がわからず使いづらい. 

## Webページ使用フロー

1. カテゴリからの検索と、曜日と時限（実装検討中）、講義名から検索
2. 検索ボタン押下後、下に検索結果リストを表示
3. 検索結果リストから一つ選択し、選択した講義のシラバスを表示


## 使用技術

- python3 (データ収集)
- PostgreSQL（データベース）
- Deno（TS実行環境）
- Aleph.js(Reactフレームワーク）
- React (Web アプリフレームワーク）
- Type Script (フロントエンド、サーバーサイド)
- Docker
- AWS(RDS, EC2)

## フレームワーク選定の経緯
始めはPreactを用いるDenoフレームワーク、Freshを用いてフロントエンドの開発に着手した。しかしPreactは初心者の自分には洗練されすぎていて情報も少なく使用するメリットを感じなくなったので、Deno用Reactフレームワーク、Aleph.jsに変更した。



