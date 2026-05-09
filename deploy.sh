#!/bin/bash
# GPTCODEX Docs 部署脚本
# 用法: bash deploy.sh

set -e

APP_DIR="/root/docs"
PORT=8028

echo "=== GPTCODEX Docs 部署 ==="

cd "$APP_DIR"

# 安装依赖
echo "安装依赖..."
npm install

# 构建静态文件
echo "构建文档..."
npx vuepress build docs

# 创建 systemd 服务（用 serve 托管构建产物，不用 dev 模式）
echo "配置 systemd 服务..."
NODE_PATH=$(which node)
SERVE_PATH="$APP_DIR/node_modules/.bin/serve"

cat > /etc/systemd/system/gptcodex-docs.service <<EOF
[Unit]
Description=GPTCODEX Docs (VuePress + Plume)
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=$APP_DIR
ExecStart=$NODE_PATH $SERVE_PATH docs/.vuepress/dist -l $PORT --no-clipboard
Restart=on-failure
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

# 重载并启动服务
systemctl daemon-reload
systemctl enable gptcodex-docs
systemctl restart gptcodex-docs

echo "=== 部署完成 ==="
echo "服务运行在: http://0.0.0.0:$PORT"
echo "域名访问: https://docs.gptcodex.top"
systemctl status gptcodex-docs --no-pager
