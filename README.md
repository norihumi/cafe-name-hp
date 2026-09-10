# カフェサイト（カフェ・ブランドHP）

**🔗 サイトURL:** https://norihumi.github.io/cafe-name-hp/

架空のカフェブランドを想定して制作した、1カラム構成のWebサイトです。
デザインの作成からHTML/CSSの構造化、レスポンシブ対応、スクロール位置の調整までフルスクラッチで実装しました。

---

## 📷 イメージ・デモ

<img width="488" height="5065" alt="smallSize" src="https://github.com/user-attachments/assets/1de9bc28-3caf-44f5-b598-a71ba741397a" />
<img width="1065" height="4457" alt="fullSize" src="https://github.com/user-attachments/assets/83c830da-9608-4375-bc1e-1947b0dcb6e9" />


---

## 🛠 使用技術・開発環境

- **デザイン**: GIMP（Windows環境）
- **マークアップ**: HTML5（セマンティックタグ、BEM記法）
- **スタイルシート**: CSS3（Flexbox、レスポンシブ対応）
- **コードエディタ / バージョン管理**: VSCode (macOS) / Git, GitHub

---

## 💡 こだわりポイント・実装機能

### 1. 保守性と視認性を高めたCSS構造（BEM記法）
- クラス命名には **BEM記法（Block__Element--Modifier）** を採用し、スタイルの破綻を防ぎ、再利用性の高いコード構造に仕上げました。

### 2. 固定ヘッダーにおけるページ内リンクの位置補正
- 固定ヘッダー（`position: fixed`）を採用しているため、内部リンクジャンプ時にヘッダーと見出しが被らないよう、`:target` 擬似クラスおよび `scroll-margin-top` を用いて着地位置を正しく補正しました。

### 3. スマホ・タブレットに最適化したレスポンシブデザイン
- メディアクエリを使用し、PC・タブレット・スマートフォンそれぞれの画面サイズに合わせたレイアウト調整（Flexboxの折り返し制御、フォントサイズ・余白の最適化）を行いました。

### 4. セマンティックなフォーム実装
- お問い合わせフォーム（Contactセクション）では、`label` タグの `for` 属性と `input` / `textarea` の `id` を正しく紐付け、アクセシビリティに配慮した設計にしました。

### 5. 外部埋め込みとビジュアル演出
- Accessセクションへの **Googleマップ（iframe）埋め込み**
- Footer部分での擬似要素（`::after`）を活用した区切り線デザイン

---

## 📂 サイト構成（セクション）

1. **Header / Main Visual**: 固定ナビゲーション、キャッチコピー
2. **About**: 店舗コンセプトの紹介
3. **Menu**: おすすめメニュー一覧（カード型配置）
4. **News**: 店舗からのお知らせ
5. **Access**: 店舗情報およびGoogle Maps
6. **Contact**: お問い合わせフォーム
7. **Footer**: サイトマップ、コピーライト
