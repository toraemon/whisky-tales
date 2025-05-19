# Docker 起動・停止
up:
	docker compose up -d

down:
	docker compose down

restart:
	docker compose down && docker compose up -d

# Prisma 関連
generate:
	docker compose exec backend npx prisma generate

migrate:
	docker compose exec backend npx prisma migrate dev

studio:
	docker compose exec backend npx prisma studio

# ログ確認
logs:
	docker compose logs -f backend