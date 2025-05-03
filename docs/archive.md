# 🗂️ WhiskyTales 設計記録（アーカイブ）

このドキュメントでは、初期設計段階で議論・検討された内容をアーカイブとして記録します。

---

## 🎯 MVP 定義（Minimum Viable Product）

| 機能カテゴリ               | 機能概要                           |
| -------------------------- | ---------------------------------- |
| 認証                       | ユーザー登録・ログイン（Cognito）  |
| ウィスキー閲覧             | 登録済み銘柄の一覧・詳細表示       |
| レビュー投稿               | スコア（1〜5）、コメント、タグ付け |
| マイページ                 | 自分のレビュー一覧表示・編集・削除 |
| 他のユーザーのレビュー閲覧 | 一覧・詳細表示                     |

---

## 🧱 エンティティ設計（初期版）

### `User`

- id (PK)
- name
- email
- created_at

### `Whisky`

- id (PK)
- name
- distillery
- age
- cask_type
- region
- created_at

### `Review`

- id (PK)
- user_id (FK)
- whisky_id (FK)
- score
- comment
- created_at

### `Tag`

- id (PK)
- name

### `WhiskyTag`

- whisky_id (FK)
- tag_id (FK)

---

## 🔁 将来の拡張案（v ２以降）

- `ProposedWhisky`による銘柄提案と承認制
- いいね機能（`Like`テーブル）
- 友達機能（`Friendship`テーブル）
- コメント機能（レビューに対するコメント）
- AI によるおすすめ銘柄レコメンド
- 不適切投稿の自動検出（NLP）

---

## 🤖 　生成 AI との連携

本プロジェクトでは、生成 AI（ChatGPT）を活用し、以下のような支援を受けながら進行しています：

- 要件定義の整理
- MVP の抽出・優先順位付け
- エンティティ設計案の作成
- Markdown・ロゴ・アイコンの生成補助
