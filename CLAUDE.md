# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ 重要：バージョン混在状態

このリポジトリは **2つの異なるバージョン** が存在します。作業する前に確認してください：

### 📍 現在デプロイされている本体（新バージョン）
- **URL**: https://portfolio-nine-beige-34.vercel.app/
- **タイプ**: Vanilla JavaScript（HTML + CSS + JS）
- **デザイン**: 和テイスト・ライトカラー（beige デフォルト）
- **機能**: TWEAKS システムで palette, ornament, font, layout を動的に切り替え
- **Commit**: `cba3b7ed` - "feat: replace LP with Claude.design handoff (Portfolio.html)"
- **ステータス**: ✅ Production

### 📦 ローカル main ブランチ（旧バージョン）
- **タイプ**: React + Vite + Tailwind CSS
- **デザイン**: Dark theme（bg-zinc-900）
- **ファイルロケーション**: `/src` ディレクトリ、`index.html`、`vite.config.ts`
- **Commit**: `43bae54c` - "feat: add mobile touch support for detail panel"
- **ステータス**: ⚠️ アーカイブ版（_legacy/react-vite-version/ に備份）

---

## 新バージョン（Production）の詳細

### ファイル構成
```
index.html              # 914 行の単一ファイル（Vanilla JS + インライン CSS）
  ├─ <style>          # すべてのスタイル定義
  ├─ <script>         # 初期化スクリプト（TWEAKS, ornament）
  ├─ <html>           # UI構造（aside, main, detail panel）
  └─ window.WORKS[]   # 12個のプロジェクトデータ

.vercel/project.json   # Vercel デプロイ設定
```

### デザインシステム（TWEAKS）

リアルタイムで切り替え可能な4つのディメンション：

**1. Palette（配色）**
- `beige`: 紙の白 + 墨 + 淡いグレーグリーン（デフォルト）
  - --paper: #f2ede1, --ink: #2a2620, --accent: #6b7a6a（苔色）
- `grey`: ニュートラルグレー
  - --paper: #eeece4, --ink: #2f2f2b, --accent: #5a6b74
- `sumi`: 墨・逆配色（暗い背景 + 淡い文字）
  - --paper: #1b1a16, --ink: #e6dfcb

**2. Ornament（装飾・背景紋様）**
- `line`: 幾何学的な円と直線
- `wagara`: 麻の葉・青海波などの伝統和紋パターン
- `sumi`: インク流れの筆跡風

**3. Font（書体）**
- `mincho`: Shippori Mincho / Cormorant Garamond（serif）
- `gothic`: Zen Kaku Gothic New（sans-serif）

**4. Layout（レイアウト）**
- `split`: 左 19% sidebar + 右 main（デフォルト）
  - Profile card 左側、Projects catalog 右側
- `scroll`: 左 22% sidebar + 右 horizontal scroll list
  - Projects が横スクロール可能
- `center`: 中央 3-column centered layout
  - Profile センター、Projects 2-column

### プロジェクトデータ（WORKS）

12 個のプロジェクトを `window.WORKS` 配列で管理：

```javascript
{
  num: "01",
  year: 2025,
  title: "OH-SOUJI",
  subtitle: "年末の大掃除をレトロゲーム風のクエストに",
  body: "...",
  tags: ["HTML", "CSS", "JavaScript", "Firebase RTDB"],
  link: "https://oosouji-quest.web.app/"
}
```

**対応プロジェクト（num, year, title）**
- 01, 2025: OH-SOUJI
- 02, 2025: TANA-OROSHI
- 03, 2025: MONEY BOY
- 04, 2025: TDTK
- 05, 2026: WORD BOKUJOU
- 06, 2026: 10 Days Ago
- 07, 2026: PEPETETSU
- 08, 2026: MONEY-BOY NEO
- 09, 2026: ONTAKE100 2026
- 10, 2026: 白地図 Shirochizu
- 11, 2026: KOTOBA-YAKIMONO
- 12, 2026: HAIKU ENGINE

### UI 構造

```html
<body data-palette="grey" data-layout="split" data-font="gothic">
  <aside>
    <!-- Profile card: mark SVG, name, meta, footer links -->
    <div class="mark"></div>
    <div class="aside-head"><h1 class="name">takanuri-spec</h1></div>
    <div class="meta">{{ role, philosophy, years active }}</div>
    <div class="aside-foot">{{ copyright, social links }}</div>
  </aside>

  <main>
    <div class="main-head">{{ eyebrow, h2.title, count }}</div>
    <div class="index-wrap">
      <ol class="index-list">{{ projects grid }}</ol>
    </div>
  </main>

  <div class="detail" id="detail">
    <!-- クリック時に show クラス追加で表示 -->
    {{ eyebrow, title, subtitle, screenshot, body, tags, link }}
  </div>

  <div class="ornament-bg"></div>
  <div class="tweaks">{{ palette, ornament, font, layout buttons }}</div>
</body>
```

### インタラクション

**Detail Panel**
- `.idx` リスト要素をクリック → `detail.classList.add('show')`
- ESC キー または CLOSE ボタンで閉じる
- モバイル（≤640px）では画面下部フルワイド表示

**Ornament**
- `renderOrnament(kind)` 関数で SVG をメイン内に動的挿入
- 背景に opacity: 0.55 で表示

**Tweaks Panel**
- 右上に固定表示（デフォルト非表示、edit mode でのみ show）
- ボタン click で `TWEAKS[key] = value` を更新
- `applyTweaks(TWEAKS)` で data-* 属性と CSS 変数を更新

### モバイル対応（≤640px）

- body: `overflow: auto` 復活（縦スクロール有効化）
- stage: grid-template-columns 1fr に変更
- aside: flex-direction row, flex-wrap（header + footer 横並び）
- main: 通常フローに（overflow visible）
- index-list: 1 column grid
- detail panel: 画面下部フルワイド、max-height 80vh
- tweaks: display none（モバイルでは非表示）

---

## 旧バージョン（ローカル main）について

### 概要
- **フレームワーク**: React 18.3 + Vite 6 + Tailwind CSS 4
- **エントリ**: `src/main.tsx` → `src/app/App.tsx`
- **スタイル**: Tailwind utilities + `src/styles/` (fonts, tailwind, theme)
- **コンポーネント**: Hero, ServiceCard, UI (Radix)
- **ビルド**: `npm run build` (generate-icons.mjs + vite build)
- **PWA**: Service worker, manifest.json, icon generation

### アーカイブ場所
```
_legacy/
  react-vite-version/      # React/Vite コードベース
  NEW_VERSION_INFO.md      # 新バージョン詳細
```

### 何が違うのか
1. **フレームワーク**: React vs Vanilla JS
2. **ビルド**: Vite vs 単一ファイル (index.html)
3. **デザイン**: Dark theme (Zinc) vs Light theme (和テイスト)
4. **機能**: PWA + service worker vs Vanilla HTML
5. **スケーリング**: React コンポーネント vs インライン HTML
6. **プロジェクト数**: 可変 vs 固定 12 個

---

## 本体（新バージョン）の開発フロー

### ローカルで index.html を編集・テスト

```bash
# 単純に index.html をブラウザで開く
open index.html

# または簡易サーバー
python3 -m http.server 8000
# http://localhost:8000 にアクセス
```

### TWEAKS で動的に変更をテスト

1. 右上の "Tweaks" パネルを開く（edit mode）
2. Palette, Ornament, Font, Layout ボタンをクリック
3. リアルタイムで UI が変更
4. `localStorage` にも保存される

### プロジェクト追加

1. `index.html` 内の `window.WORKS` 配列に新規オブジェクトを追加
2. num を割り当て、プロジェクト情報を入力
3. クリックで detail panel に反映

### デプロイ

```bash
git add index.html
git commit -m "feat: update projects or tweaks"
git push origin main
# Vercel が自動デプロイ
```

---

## 旧バージョン（React）を使う場合

ローカルで React をセットアップする場合：

```bash
# 旧バージョンコードをリストア
cp -r _legacy/react-vite-version/* .

# 依存をインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# icon generation
node generate-icons.mjs
```

---

## キー情報

| 項目 | 値 |
|------|-----|
| Vercel Project ID | `prj_VFqACTf9c8Mki2RsNgtYQ4a6Oc4c` |
| Vercel Team ID | `team_tVsBufxyuPLaPfDLLC7MkSbA` |
| Production URL | https://portfolio-nine-beige-34.vercel.app/ |
| GitHub | https://github.com/takanuri-spec/portfolio |

---

## 注意事項

1. **main ブランチ = 旧バージョン（React）**: Git history が React ビルドを指している
2. **デプロイ中 = 新バージョン（Vanilla JS）**: index.html 単一ファイルが本体
3. **編集する時は** どちらを修正するのか確認して、該当ファイルを更新してください
4. **新バージョン（本体）の HTML は単一ファイル**: IDE で直接編集可能
5. **旧バージョンを使う場合** は React コンポーネント フローに従う

