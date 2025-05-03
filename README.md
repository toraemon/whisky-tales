# 🥃 WhiskyTales

**WhiskyTales**は、ウィスキー愛好家のためのレビュー&共有プラットフォームです。
好きな銘柄を記録し、他のユーザーの感想を参考にしながら、自分だけのウィスキーライフを楽しめます。

---

## ✨ 特徴

- ウィスキーに対するレビュー投稿（スコア・コメント・タグ）
- 他のユーザーのレビュー閲覧
- 自分のレビューをマイページで管理
- 主要銘柄の事前登録によるスムーズな投稿体験

---

## 🚀 技術構成（MVP）

| 分類           | 使用技術                                        |
| -------------- | ----------------------------------------------- |
| 言語           | TypeScript                                      |
| フロントエンド | Next.js (App Router) + Tailwind CSS             |
| バックエンド   | tRPC or Express.js + Prisma                     |
| 認証           | AWS Cognito                                     |
| データベース   | PostgreSQL（予定）                              |
| インフラ       | AWS（Lambda、API Gateway、RDS、S3、CloudFront） |
| IaC            | AWS CDK（TypeScript）                           |

## 🤖 このプロジェクトと生成 AI

このプロジェクトは、**ChatGPT(OpenAPI)を活用したアジャイルな AI 駆動開発**によって構想・設計・アイデアの整理・アウトプット支援が行われています。

- ER 図設計補助
- 要件定義・MVP 抽出支援
- ロゴ・アイコン生成
- Markdown 設計資料の作成補助

AI との協働によって、より柔軟かつ高速なプロジェクト構築を目指しています。

---

## 📁 開発用構成例

```text
/app
/reviews
/whiskies
/auth
/public
/assets
- logo.png
- icon.ico
/prisma
/scripts
/docs
```

---

## 🧪 今後の構想

- 承認制による新規銘柄提案機能
- いいね・友達機能
- コメント機能
- AI によるおすすめ銘柄提案
