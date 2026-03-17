#!/usr/bin/env bash
set -euo pipefail

DEPLOY_DIR="${1:-$HOME/agency-website-deploy/deploy-assets}"
SOURCE_DIR="$DEPLOY_DIR/source"
APP_DIR="/opt/agency-website"
APP_DOMAIN="${APP_DOMAIN:-dev.ark8.space}"
APP_PORT="${APP_PORT:-3010}"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "ERROR: source directory not found: $SOURCE_DIR"
  exit 1
fi

if ! command -v rsync >/dev/null 2>&1; then
  sudo apt-get update -y
  sudo apt-get install -y rsync
fi

if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

if ! command -v pm2 >/dev/null 2>&1; then
  sudo npm install -g pm2
fi

if ! command -v nginx >/dev/null 2>&1; then
  sudo apt-get update -y
  sudo apt-get install -y nginx
fi

sudo mkdir -p "$APP_DIR"
sudo rsync -a --delete "$SOURCE_DIR"/ "$APP_DIR"/
sudo chown -R "$USER":"$USER" "$APP_DIR"

if [ -s "$DEPLOY_DIR/env.production" ]; then
  cp "$DEPLOY_DIR/env.production" "$APP_DIR/.env.production"
fi

cd "$APP_DIR"
export NEXT_TELEMETRY_DISABLED=1

npm ci
npm run build

pm2 delete agency-website-dev >/dev/null 2>&1 || true
pm2 start ecosystem.config.cjs --only agency-website-dev
pm2 save

sudo cp "$DEPLOY_DIR/dev.ark8.space.conf" "/etc/nginx/sites-available/$APP_DOMAIN"
sudo ln -sfn "/etc/nginx/sites-available/$APP_DOMAIN" "/etc/nginx/sites-enabled/$APP_DOMAIN"
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx

echo "Deployment successful: http://$APP_DOMAIN -> 127.0.0.1:$APP_PORT"
