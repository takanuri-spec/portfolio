# takanuri-spec Portfolio

**🎨 和テイスト・ライトカラーのポートフォリオサイト**

## 📍 Live Site

https://portfolio-nine-beige-34.vercel.app/

## ℹ️ Version Information

### Current Production (Active)
- **Type**: Vanilla JavaScript（HTML + CSS + JS）
- **File**: `index.html` (single file)
- **Design**: 和テイスト・ライトカラー
- **Features**: 
  - 左sidebar プロフィール + 右メインカタログリスト
  - TWEAKS システムで palette/ornament/font/layout を動的に切り替え
  - responsive mobile layout（≤640px で縦積み）
  - 12 個のプロジェクト表示

### Archived Version
- **Type**: React + Vite + Tailwind CSS
- **Location**: `_legacy/react-vite-version/`
- **Status**: ⚠️ No longer maintained
- See `_legacy/README.md` for details.

---

## 🚀 Getting Started

### Run the New Version (Recommended)

Simply open `index.html` in a browser:

```bash
open index.html
# または
python3 -m http.server 8000
# http://localhost:8000 にアクセス
```

### Customize

Edit `index.html` directly:
1. `window.WORKS` 配列でプロジェクトを追加・編集
2. `<style>` セクションで色やフォントを変更
3. `TWEAKS` デフォルト値を変更

### Deploy

```bash
git add index.html
git commit -m "update portfolio"
git push origin main
# Vercel が自動デプロイ
```

---

## 📚 Documentation

See **`CLAUDE.md`** for:
- 新旧バージョンの詳細比較
- Design System（Palettes, Ornaments, Fonts, Layouts）
- Project データ構造
- UI インタラクション
- モバイル対応
- Complete development guide

---

## 📋 Design System

### Palettes
- **beige** (default): 紙の白 + 墨
- **grey**: ニュートラルグレー
- **sumi**: 墨・逆配色

### Ornaments
- **line**: 幾何学的
- **wagara**: 伝統和紋
- **sumi**: インク筆跡

### Fonts
- **mincho**: serif (Shippori Mincho)
- **gothic**: sans-serif (Zen Kaku Gothic)

### Layouts
- **split**: 左sidebar + 右main（デフォルト）
- **scroll**: 左sidebar + 右horizontal scroll
- **center**: 中央3-column centered

**→ 右上の "Tweaks" パネルでリアルタイム切り替え**

---

## 🏗️ File Structure

```
index.html              # 本体（914行の単一ファイル）
CLAUDE.md              # 開発ガイド
README.md              # このファイル
.vercel/               # Vercel設定
_legacy/               # アーカイブ版（React/Vite）
```

---

## 🔗 Links

- **GitHub**: https://github.com/takanuri-spec/portfolio
- **Vercel Project**: https://vercel.com/...
- **Profile**: https://github.com/takanuri-spec
