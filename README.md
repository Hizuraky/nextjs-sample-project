# Next.js sample project

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ディレクトリ構成

```
src
├── app        # 各ページとレイアウト（ Next.js 13.x ~ ）
├── assets     # 画像やフォントなどの静的ファイル
├── components # アプリケーション全体の共通コンポーネント
├── config     # 環境変数などをエクスポートするところ
├── hooks      # アプリケーション全体の共通hooks
├── lib        # ライブラリをアプリケーション用にしたもの
├── stores     # グローバルステートストア
├── test       # テストユーティリティとモックサーバ
├── types      # アプリケーション全体で使用される基本的な型の定義
└── utils      # 共通のユーティリティ関数
```
