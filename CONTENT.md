# Portfolio Content Definition
<!-- ================================================================
  このファイルはポートフォリオサイトのコンテンツ定義書です。
  テキスト情報・URL・スクリーンショット・技術タグを一元管理し、
  各HTMLファイルへの変更作業をスムーズに連携するために使用します。

  ルール:
  - ここの内容を変更したら、Antigravityに
    「CONTENTを元にHTMLへ反映して」と伝えるだけでOK。
  - 新しいプロジェクトを追加する場合は、テンプレートに沿って
    セクションを追記してください。
  - スクリーンショットを追加する場合は、
    `assets/screenshots/` フォルダに画像を配置してください。

  反映先:
  - index.html       : カード名・URL・キャッチコピー・アイコン画像
  - showcase.html     : 企画意図・面白み・技術スタック・独自の工夫・スクショ（メイン1枚）
  - showcase2.html    : テキスト（簡潔版）・技術タグ・スクショ（複数枚）
  ================================================================ -->

---

## サイト全体設定

| 項目 | 値 |
|---|---|
| サイトタイトル | TAKANURI \| Portfolio |
| メインタイトル（index.html） | SELECTED WORKS |
| Showcase 1 タイトル | 個人開発の軌跡 |
| Showcase 1 サブタイトル | 非エンジニアが2ヶ月で駆け抜けた、6つのアプリと1つのポートフォリオ |
| Showcase 2 タイトル | LOOK & FEEL |
| Showcase 2 サブタイトル | 6つのアプリケーションを、スクリーンショットで体感する |
| デザインテーマ | Pantone Color of the Year 2026 (Cloud Dancer #F0EEE9) |
| フォント | Outfit (300, 500, 700) |

---

## クロージング（showcase.html フッター）

### 個人開発の3つの教訓

1. **小さく生んで、育てる**
   最初はHTML数枚から。徐々にモダンなスタックへ。2ヶ月の進化の実録。

2. **AIを体験にする**
   ただのチャットではなく、アドバイザーや錬金術師としてAIに役割を与える。

3. **俺が欲しいものを作る**
   個人的な課題解決にフォーカスすることが、最も高い熱量と品質を生む。

---

<!-- ========================================================
     以下、各プロジェクトのコンテンツ定義
     ======================================================== -->

## 01. OH-SOUJI

### 基本情報
| 項目 | 値 |
|---|---|
| 表示名 | OH-SOUJI |
| 日本語名 | 大掃除クエスト |
| 英語キャッチ | Gamified Housekeeping |
| 本番URL | https://oosouji-quest.web.app/ |
| アイコン | assets/icons/oh_souji.png |

### 技術スタック
- HTML / CSS / JS
- Firebase RTDB
- Hosting

### テキストコンテンツ

**企画の意図**
家族の年末大掃除を「レトロゲーム風」に楽しく進行し、退屈な作業をクエストに変える。

**面白み**
ポイント制、ボス戦演出、リーダーボードなど、ゲーム的要素で家族の競争心を刺激する。

**独自の工夫**
非エンジニアでも「テキストファイルを書き換えるだけ」でタスク追加可能な簡易運用フロー。

**紹介文（Visual Showcase用・簡潔版）**
年末の大掃除をレトロゲーム風のクエストに変換。ポイント制やボス戦演出で家族の競争心を引き出す。

### スクリーンショット
| 用途 | ファイルパス | 説明 |
|---|---|---|
| showcase メイン | assets/screenshots/スクリーンショット 2026-02-21 1.18.05.png | ボス討伐画面 |
| showcase2 画像1 | assets/screenshots/スクリーンショット 2026-02-21 1.18.05.png | メイン画面 |
| showcase2 画像2 | assets/screenshots/スクリーンショット 2026-02-21 1.17.42.png | クエスト一覧 |
| showcase2 画像3 | assets/screenshots/スクリーンショット 2026-02-21 1.17.56.png | リーダーボード |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 1.15.22.png | — |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 1.15.55.png | — |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 1.16.12.png | — |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 1.16.24.png | — |

### Visual Showcase レイアウト
パターンB（斜め重ね合わせ / 3枚）

---

## 02. TANA-OROSHI

### 基本情報
| 項目 | 値 |
|---|---|
| 表示名 | TANA-OROSHI |
| 日本語名 | 汎用棚卸しプラットフォーム |
| 英語キャッチ | AI Inventory Management |
| 本番URL | https://tanaoroshi-810eb.web.app/ |
| アイコン | assets/icons/tana_oroshi.png |

### 技術スタック
- React / TypeScript
- Gemini 2.0 Flash
- Firestore

### テキストコンテンツ

**企画の意図**
全資産を可視化し、執着を手放すための在庫管理基盤。Phase1は「洋服」に特化。

**面白み**
カメラ撮影だけでAIが属性を自動解析し、断捨離の是非をアドバイスしてくれる未来のアシスタント感。

**独自の工夫**
「本」や「ガジェット」などあらゆるドメイン拡張を見越した、依存性のない汎用的な基盤設計。

**紹介文（Visual Showcase用・簡潔版）**
カメラ撮影だけでAIが属性を自動解析。断捨離アドバイスまで出力する未来のアシスタント。

### スクリーンショット
| 用途 | ファイルパス | 説明 |
|---|---|---|
| showcase メイン | assets/screenshots/スクリーンショット 2026-02-21 1.20.20.png | 一覧画面 |
| showcase2 メイン | assets/screenshots/スクリーンショット 2026-02-21 1.20.20.png | メイン |
| showcase2 フロート左 | assets/screenshots/スクリーンショット 2026-02-21 1.21.07.png | 詳細画面 |
| showcase2 フロート右 | assets/screenshots/スクリーンショット 2026-02-21 1.22.56.png | AI分析画面 |

### Visual Showcase レイアウト
パターンE（メイン大 + フロートサブ2枚）

---

## 03. MONEY BOY

### 基本情報
| 項目 | 値 |
|---|---|
| 表示名 | MONEY BOY |
| 日本語名 | 統合財務・ライフプラン管理 |
| 英語キャッチ | Complete Personal Finance |
| 本番URL | https://money-boy.vercel.app/ledger/dashboard |
| アイコン | assets/icons/money_boy.png |

### 技術スタック
- Vite PWA
- NextAuth
- Google Sheets API
- Vercel

### テキストコンテンツ

**企画の意図**
家計簿から年金、RSU、確定申告まで。市販アプリでは届かない個人の財務要件を網羅する。

**面白み**
自分だけの複雑な計算ロジックを反映した、極めてパーソナルで精緻な未来推計機能。

**独自の工夫**
DBとして「Google Sheets」を採用。自身が直接シート上でデータを視認・修正できるハック的構成。

**紹介文（Visual Showcase用・簡潔版）**
家計簿から年金、RSU、確定申告まで。パーソナルな未来推計を実現する財務管理基盤。

### スクリーンショット
| 用途 | ファイルパス | 説明 |
|---|---|---|
| showcase メイン | assets/screenshots/スクリーンショット 2026-02-21 14.25.43.png | ダッシュボード |
| showcase2 メイン | assets/screenshots/スクリーンショット 2026-02-21 14.25.43.png | ダッシュボード |
| showcase2 サブ左 | assets/screenshots/スクリーンショット 2026-02-21 14.25.30.png | レジャー画面 |
| showcase2 サブ右 | assets/screenshots/スクリーンショット 2026-02-21 14.26.13.png | ライフプラン |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 14.26.54.png | — |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 14.44.54.png | — |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 14.45.11.png | — |

### Visual Showcase レイアウト
パターンC（フルブリード1枚 + ボトムにサブ2枚）

---

## 04. TDTK

### 基本情報
| 項目 | 値 |
|---|---|
| 表示名 | TDTK |
| 日本語名 | 伊能忠敬・四万キロの軌跡 |
| 英語キャッチ | GPS Running Journey |
| 本番URL | https://tracing-tadataka.web.app/ |
| アイコン | assets/icons/tdtk.png |

### 技術スタック
- React / Vite
- Capacitor (Android)
- Geolocation API

### テキストコンテンツ

**企画の意図**
地球一周(4万km)を目指し歩行記録を行うジョギングアプリ。伊能忠敬の偉業というロマンを掛け合わせる。

**面白み**
ただの距離記録を「歴史的な挑戦」に塗り替え、継続のモチベーションに変える仕掛け。

**独自の工夫**
地図描画のパフォーマンス改善と、モバイル利用に特化したレスポンシブな操作感。Androidアプリ化。

**紹介文（Visual Showcase用・簡潔版）**
地球一周を目指しGPSで歩行記録。伊能忠敬の偉業というロマンと重ね合わせた継続ランニングアプリ。

### スクリーンショット
| 用途 | ファイルパス | 説明 |
|---|---|---|
| showcase メイン | assets/screenshots/unnamed.png | マップ画面 |
| showcase2 中央 | assets/screenshots/unnamed.png | マップ画面 |
| showcase2 背景 | assets/screenshots/unnamed.png | マップ画面（ゴースト） |
| showcase2 左フロート | assets/screenshots/unnamed (1).png | 記録画面 |
| showcase2 右フロート | assets/screenshots/unnamed (2).png | 走行履歴 |
| 未使用（候補） | assets/screenshots/unnamed (3).png | — |
| 未使用（候補） | assets/screenshots/unnamed (5).png | — |
| 未使用（候補） | assets/screenshots/unnamed (6).png | — |

### Visual Showcase レイアウト
パターンF（中央 + ゴースト背景 + サイドフロート2枚）

### 特記
showcase.html ではモバイルフレーム（`.mobile-frame`）で表示。

---

## 05. WORD BOKUJOU

### 基本情報
| 項目 | 値 |
|---|---|
| 表示名 | WORD BOKUJOU |
| 日本語名 | 概念錬金術ゲーム |
| 英語キャッチ | Living Word Ranch |
| 本番URL | https://wordbokujou.web.app/ |
| アイコン | assets/icons/word_bokujou.png |

### 技術スタック
- React / Vite
- Gemini 2.0 Flash
- Google Imagen

### テキストコンテンツ

**企画の意図**
言葉(概念)をカードとして育て、交配させて新しい概念を生み出す「概念ガチャ」育成ゲーム。

**面白み**
2つの言葉を混ぜるとAIが予想外の新しい言葉とイラストを生成してくれる、創造的な驚き。

**独自の工夫**
「文豪風」「中二病風」などの出力を操作できる『調味料システム』によるAI制御。

**紹介文（Visual Showcase用・簡潔版）**
2つの言葉をAIで交配し、予想外の新しい概念とイラストが誕生する創造的育成ゲーム。

### スクリーンショット
| 用途 | ファイルパス | 説明 |
|---|---|---|
| showcase メイン | assets/screenshots/スクリーンショット 2026-02-21 15.38.16.png | メイン画面 |
| showcase2 画像1 | assets/screenshots/スクリーンショット 2026-02-21 15.38.16.png | メイン画面 |
| showcase2 画像2 | assets/screenshots/スクリーンショット 2026-02-21 15.39.33.png | 牧場画面 |
| showcase2 画像3 | assets/screenshots/スクリーンショット 2026-02-21 15.39.45.png | 交配画面 |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 15.43.59.png | — |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 15.45.18.png | — |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 15.57.19.png | — |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 15.57.53.png | — |

### Visual Showcase レイアウト
パターンB（斜め重ね合わせ / 3枚）

---

## 06. 10 Days Ago

### 基本情報
| 項目 | 値 |
|---|---|
| 表示名 | 10 Days Ago |
| 日本語名 | タイムトラベル型投資ゲーム |
| 英語キャッチ | Investment Prediction Game |
| 本番URL | https://tendaysago-277e6.web.app/ |
| アイコン | assets/icons/ten_days_ago.png |

### 技術スタック
- React
- Firestore / Functions
- Financial API

### テキストコンテンツ

**企画の意図**
「10日前の自分ならどう判断したか？」を追体験し、投資の目利きを養うシミュレーション。

**面白み**
実際の10日前の市場データのみを提示。現在価格との差でスコアを競うコミュニティ特化の遊び。

**独自の工夫**
外部の企業財務APIを接続し、リアルタイムな市場データとAI解説を動的に統合。

**紹介文（Visual Showcase用・簡潔版）**
10日前の市場データだけで判断し、現在価格との差でスコアを競う投資シミュレーション。

### スクリーンショット
| 用途 | ファイルパス | 説明 |
|---|---|---|
| showcase メイン | assets/screenshots/スクリーンショット 2026-02-21 16.39.31.png | メイン画面 |
| showcase2 メイン | assets/screenshots/スクリーンショット 2026-02-21 16.39.31.png | メイン画面 |
| showcase2 サブ1 | assets/screenshots/スクリーンショット 2026-02-21 16.40.13.png | 銘柄選択 |
| showcase2 サブ2 | assets/screenshots/スクリーンショット 2026-02-21 16.40.37.png | 結果画面 |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 16.40.47.png | — |
| 未使用（候補） | assets/screenshots/スクリーンショット 2026-02-21 16.40.55.png | — |

### Visual Showcase レイアウト
パターンA（メイン大 + 右にサブ2枚縦配置）

---

## 利用可能なレイアウトパターン（showcase2.html）

| パターン | CSSクラス | 構成 | 使用中 |
|---|---|---|---|
| A | `gallery-layout-a` | メイン大 + 右にサブ2枚縦 | 10 Days Ago |
| B | `gallery-layout-b` | 3枚を斜めオフセットで重ねる | OH-SOUJI, WORD BOKUJOU |
| C | `gallery-layout-c` | フルブリード1枚 + ボトム2枚 | MONEY BOY |
| D | `gallery-layout-d` | 3カラム均等（マガジン風） | （未使用・追加候補） |
| E | `gallery-layout-e` | メイン大 + 左右にフロートサブ | TANA-OROSHI |
| F | `gallery-layout-f` | 中央 + ゴースト背景 + サイド2枚 | TDTK |

---

## 新しいプロジェクトを追加するときのテンプレート

```markdown
## NN. プロジェクト名

### 基本情報
| 項目 | 値 |
|---|---|
| 表示名 | XXXXXX |
| 日本語名 | ○○○○ |
| 英語キャッチ | Xxxxxxx Xxxxxxx |
| 本番URL | https://xxxxxxxx.web.app/ |
| アイコン | assets/icons/xxxxxx.png |

### 技術スタック
- xxx
- xxx
- xxx

### テキストコンテンツ

**企画の意図**
（1〜2文で）

**面白み**
（1〜2文で）

**独自の工夫**
（1〜2文で）

**紹介文（Visual Showcase用・簡潔版）**
（1文で）

### スクリーンショット
| 用途 | ファイルパス | 説明 |
|---|---|---|
| showcase メイン | assets/screenshots/xxx.png | ○○画面 |
| showcase2 画像1 | assets/screenshots/xxx.png | ○○画面 |
| showcase2 画像2 | assets/screenshots/xxx.png | ○○画面 |
| showcase2 画像3 | assets/screenshots/xxx.png | ○○画面 |

### Visual Showcase レイアウト
パターンX（説明）
```

---

## 全スクリーンショット一覧（assets/screenshots/）

### OH-SOUJI 関連（1:15〜1:18 撮影）
- `スクリーンショット 2026-02-21 1.15.22.png` — 未使用
- `スクリーンショット 2026-02-21 1.15.55.png` — 未使用
- `スクリーンショット 2026-02-21 1.16.12.png` — 未使用
- `スクリーンショット 2026-02-21 1.16.24.png` — 未使用
- `スクリーンショット 2026-02-21 1.17.42.png` — ✅ showcase2
- `スクリーンショット 2026-02-21 1.17.56.png` — ✅ showcase2
- `スクリーンショット 2026-02-21 1.18.05.png` — ✅ showcase / showcase2

### TANA-OROSHI 関連（1:20〜1:22 撮影）
- `スクリーンショット 2026-02-21 1.20.20.png` — ✅ showcase / showcase2
- `スクリーンショット 2026-02-21 1.21.07.png` — ✅ showcase2
- `スクリーンショット 2026-02-21 1.22.56.png` — ✅ showcase2

### MONEY BOY 関連（14:25〜14:45 撮影）
- `スクリーンショット 2026-02-21 14.25.30.png` — ✅ showcase2
- `スクリーンショット 2026-02-21 14.25.43.png` — ✅ showcase / showcase2
- `スクリーンショット 2026-02-21 14.26.13.png` — ✅ showcase2
- `スクリーンショット 2026-02-21 14.26.54.png` — 未使用
- `スクリーンショット 2026-02-21 14.44.54.png` — 未使用
- `スクリーンショット 2026-02-21 14.45.11.png` — 未使用

### TDTK 関連（unnamed系 / 15:19〜15:22 撮影）
- `unnamed.png`   — ✅ showcase / showcase2（メイン＋背景）
- `unnamed (1).png` — ✅ showcase2
- `unnamed (2).png` — ✅ showcase2
- `unnamed (3).png` — 未使用
- `unnamed (5).png` — 未使用
- `unnamed (6).png` — 未使用
- `スクリーンショット 2026-02-21 15.19.06.png` — 未使用（TDTK関連?）
- `スクリーンショット 2026-02-21 15.22.35.png` — 未使用（TDTK関連?）

### WORD BOKUJOU 関連（15:38〜15:57 撮影）
- `スクリーンショット 2026-02-21 15.38.16.png` — ✅ showcase / showcase2
- `スクリーンショット 2026-02-21 15.39.33.png` — ✅ showcase2
- `スクリーンショット 2026-02-21 15.39.45.png` — ✅ showcase2
- `スクリーンショット 2026-02-21 15.43.59.png` — 未使用
- `スクリーンショット 2026-02-21 15.45.18.png` — 未使用
- `スクリーンショット 2026-02-21 15.57.19.png` — 未使用
- `スクリーンショット 2026-02-21 15.57.53.png` — 未使用

### 10 Days Ago 関連（16:39〜16:40 撮影）
- `スクリーンショット 2026-02-21 16.39.31.png` — ✅ showcase / showcase2
- `スクリーンショット 2026-02-21 16.40.13.png` — ✅ showcase2
- `スクリーンショット 2026-02-21 16.40.37.png` — ✅ showcase2
- `スクリーンショット 2026-02-21 16.40.47.png` — 未使用
- `スクリーンショット 2026-02-21 16.40.55.png` — 未使用

### その他
- `service_illustrations.png` — index.html のイラスト原画（参考資料）
