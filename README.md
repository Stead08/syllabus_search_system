

# シラバス閲覧システム（開発中）

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

## まだやらなくていいこと
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
- - (AWS LambdaはGoで書いた方がメンテしやすそう)
- AWS(S3, Route53, RDS, Lambda, API Gateway)
- Docker（AWS Lambdaをコンテナイメージから作成する場合）

## はじめに実装したい機能

カテゴリから検索（学類→大分類→小分類）

曜日・時限から検索

講義名検索

