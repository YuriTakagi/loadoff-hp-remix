# 開発サーバー立ち上げ
dev:
	bunx --bun remix vite:dev
# ビルド
build:
	bunx --bun remix vite:build
# プレビュー
preview:
	bunx --bun vite preview
# フォーマット&リント
lint:
	bunx @biomejs/biome check --write ./app
