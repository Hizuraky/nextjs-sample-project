# Next.js sample project

## 開発

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br />

## ディレクトリ構成

```
src
├── app        # 各ページとレイアウト（ Next.js 13.x ~ ）
├── assets     # 画像やフォントなどの静的ファイル
├── components # アプリケーション全体の共通コンポーネント
├── config     # 環境変数などのエクスポート
├── hooks      # アプリケーション全体の共通hooks
├── lib        # ライブラリをアプリケーション用にしたもの
├── stores     # グローバルステートストア
├── test       # テストユーティリティとモックサーバ
├── types      # アプリケーション全体で使用される基本的な型の定義
└── utils      # 共通のユーティリティ関数
```

<br />

## ライブラリ

| 名称                | 用途                       | 備考                                    |
| ------------------- | -------------------------- | --------------------------------------- |
| @headlessui         | UI ライブラリ              | tailwind と相性が良いため使用           |
| @hookform/resolvers | リソルバの実装             | hook-form と zod を使用する上で必要     |
| axios               | HTTP Client                | -                                       |
| clsx                | className を動的に変更     | tailwind を使うなら必須レベル           |
| jotai               | 状態管理に使用             | バンドルサイズが軽く導入が容易          |
| swr                 | フェッチデータのキャッシュ | 全て serverSideProps で賄える場合は不要 |
| zod                 | バリデーション             | TypeScript と相性がよく yup より軽い    |

### @headlessui

https://headlessui.com/

デザインが既に決まっていて 1 から実装するのであれば UI ライブラリは基本不要

headlessUI は TailwindLABS 開発なので当然のごとく tailwindCSS と相性がいい

また、スタイルがあたっていなくアクセシビリティのみの提供となっているコンポーネントが大半のため、MUI や Chakra など他の UI ライブラリとは実装方法が異なる

Nextjs で MUI などを使う場合に@tailwind base と干渉するので回避方法はあるが相性がよくない。

他 UI ライブラリを使用する場合には tailwind の採用は見送り、ChakraUI + emotion などが次点で候補に上がる

<br />

### axios

https://github.com/axios/axios

他の HTTP Client にこだわりがなければ axios で問題ない。

middleware 内で axios を使用する場合 adapter が必要となる

https://github.com/vespaiach/axios-fetch-adapter

こちらのライブラリで対応可能だが、0.x 系でのみ使用可能である点に注意。

### jotai

https://jotai.org/

状態管理で使用。

他選択肢として、Redux、zustand、recoil などが挙げられる。

特別な理由がない場合は redux は非推奨。

recoil と jotai は使い方は似ており、導入は容易。ただ recoil は[useRecoilState]以外の hooks が使いずらい・バンドルサイズが大きい・コントリビューターが実質 1 人のみ。といったデメリットがある。

以上から zustand か jotai から選ぶのがいい。
