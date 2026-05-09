module.exports = {
  apps: [{
    name: 'gptcodex-docs',
    script: 'npx',
    args: 'vuepress dev docs --port 8028 --host 0.0.0.0',
    cwd: '/opt/gptcodex-docs',
    env: {
      NODE_ENV: 'production'
    },
    restart_delay: 3000,
    max_restarts: 10,
  }]
}
