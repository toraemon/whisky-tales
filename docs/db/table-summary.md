# 🗃️ WhiskyTales テーブル定義サマリ（MVP）

## users

| カラム名    | 型                    | 必須 | 説明                      |
| ----------- | --------------------- | ---- | ------------------------- |
| id          | UUID                  | ✅   | アプリ内部 ID（PK）       |
| cognito_sub | string                | ✅   | Cognito の sub（ID 連携） |
| name        | string                | ✅   | 表示名                    |
| email       | string                | ✅   | 表示用メールアドレス      |
| role        | enum('user', 'admin') | ✅   | 権限区分                  |
| avatar_url  | string                | 任意 | プロフィール画像 URL      |
| bio         | string                | 任意 | 自己紹介                  |
| created_at  | datetime              | ✅   | 作成日時                  |
| updated_at  | datetime              | ✅   | 更新日時                  |

---

## whiskies

| カラム名                | 型                                          | 必須 | 説明                   |
| ----------------------- | ------------------------------------------- | ---- | ---------------------- |
| id                      | UUID                                        | ✅   | ウィスキー ID（PK）    |
| name                    | string                                      | ✅   | ウィスキー名           |
| distillery              | string                                      | ✅   | 蒸留所名               |
| country                 | string                                      | ✅   | 原産国                 |
| age                     | int                                         | 任意 | 熟成年数（NA は null） |
| cask                    | enum('sherry', 'bourbon', 'madeira', 'etc') | 任意 | カスク種別             |
| alcohol                 | float                                       | 任意 | アルコール度数         |
| official_url            | string                                      | 任意 | 公式ページ URL         |
| description             | text                                        | 任意 | 説明文                 |
| image_url               | string                                      | 任意 | 表示用画像 URL         |
| version                 | int                                         | ✅   | 排他制御用バージョン   |
| created_at / updated_at | datetime                                    | ✅   | 作成・更新日時         |

---

## reviews

| カラム名                | 型               | 必須 | 説明                     |
| ----------------------- | ---------------- | ---- | ------------------------ |
| id                      | UUID             | ✅   | レビュー ID（PK）        |
| user_id                 | UUID             | ✅   | 投稿者（FK）             |
| whisky_id               | UUID             | ✅   | 対象ウィスキー（FK）     |
| rating                  | int (1〜5)       | ✅   | 総合評価スコア           |
| title                   | string           | 任意 | レビューテーマ（短文）   |
| body                    | text             | ✅   | レビュー本文             |
| flavor_notes            | string[] or json | 任意 | 味わいタグ（将来拡張可） |
| location                | string           | 任意 | 飲んだ場所               |
| price                   | float            | 任意 | 飲んだ価格               |
| image_url               | string           | 任意 | 投稿画像 URL             |
| version                 | int              | ✅   | 排他制御用バージョン     |
| created_at / updated_at | datetime         | ✅   | 作成・更新日時           |

---

## favorites

| カラム名   | 型       | 必須 | 説明                     |
| ---------- | -------- | ---- | ------------------------ |
| id         | UUID     | ✅   | いいね ID（PK）          |
| user_id    | UUID     | ✅   | いいねしたユーザー（FK） |
| review_id  | UUID     | ✅   | 対象レビュー（FK）       |
| created_at | datetime | ✅   | いいね日時               |

※ `user_id + review_id` にユニーク制約（同一ユーザーが同一レビューに複数いいね不可）

---

## whisky_applications

| カラム名                | 型                                      | 必須 | 説明                   |
| ----------------------- | --------------------------------------- | ---- | ---------------------- |
| id                      | UUID                                    | ✅   | 申請 ID（PK）          |
| user_id                 | UUID                                    | ✅   | 申請者（FK）           |
| proposed_name           | string                                  | ✅   | 提案されたウィスキー名 |
| details                 | text                                    | ✅   | 提案の詳細内容         |
| status                  | enum('pending', 'approved', 'rejected') | ✅   | 審査状態               |
| created_at / updated_at | datetime                                | ✅   | 作成・更新日時         |

---

📌 各テーブルのリレーションは `er-diagram.mmd` にて視覚的に管理。

📌 Prisma の実装は `/backend/prisma/schema.prisma` にて反映予定。
