

# シラバス閲覧システム

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

## システムでやりたいこと　　
高速かつ検索しやすいシラバス検索システム（まずこれを実装したい）. 

（履修状況から卒業できるか判定）. 

（時間割も簡単に作れる）. 

## やらなくていいこと
シラバスの登録機能. 

ユーザ認証. 

## 動機

大学のシステムでのシラバス参照サイトが重すぎるから. 

次のページに遷移するのに10秒以上時間がかかる. 

検索もしづらい. 

## 使用技術

- python3 (データ収集)
- PostgreSQL（データベース）
- Deno（TS実行環境）
- Aleph.js(Denoフレームワーク）
- Type Script (フロントエンド、サーバーサイド)
- Go? (サーバサイド)=>TSでかける？
- AWS(サーバ、DB)

## はじめに作る機能

カテゴリから検索（学類→大分類→小分類）

曜日・時限から検索

講義名検索

## わからんこと
クライアント、サーバとデータベースの繋がり
- クライアントがトップページにアクセス、表示
- 検索条件を選択し、検索ボタンを押す
- ーーーここからわからんーーー
- JsonでAPIを叩く？
- APIサーバがDBサーバを操作して検索し検索結果をAPIサーバがGETする
- ここからwebサーバに結果を飛ばしてWebサーバがページを生成？
- それともクライアントがJSONを元にページを端末で生成して表示？
- 
