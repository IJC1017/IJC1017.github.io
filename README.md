# 王子建設不動産（イノベーション情報株式会社）

[![Deploy to GitHub Pages](https://github.com/IJC1017/IJC1017.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/IJC1017/IJC1017.github.io/actions/workflows/deploy.yml)

コーポレートサイト — 不動産・リフォーム・留学エージェント事業の紹介。Astro 製、GitHub Pages ホスティング。

🔗 **[www.ijc1017.com](https://www.ijc1017.com)**

## 開発

```bash
cd astro-site

# 初回のみ
npm install

# 開発サーバー (localhost:4321)
npm run dev

# 本番ビルド (出力: dist/)
npm run build
```

Node.js 20 以上が必要です。

## 構成

```
astro-site/
├── src/
│   ├── layouts/BaseLayout.astro    ← 共通ヘッダー・ナビ・フッター
│   └── pages/
│       ├── index.astro             ← トップページ
│       ├── intro.astro             ← 会社概要・採用情報
│       └── contact.astro           ← お問い合わせ
├── public/
│   ├── CNAME                       ← カスタムドメイン
│   └── assists/images/             ← 画像アセット
└── astro.config.mjs
```

- **BaseLayout** にヘッダー・ナビ・フッターを集約、全ページで共有
- ナビの現在ページは `currentPage` prop でハイライト
- 各ページのスタイルは `<style>` でスコープ管理

## デプロイ

`main` ブランチに push すると GitHub Actions が自動ビルド & GitHub Pages にデプロイします。

設定: **Settings → Pages → Source = "GitHub Actions"**

## 技術スタック

- [Astro 4](https://astro.build)
- GitHub Actions + GitHub Pages
- EmailJS（お問い合わせフォーム）
- Google Material Symbols（アイコン）
