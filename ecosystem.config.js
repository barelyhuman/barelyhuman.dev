module.exports = {
  apps: [
    {
      name: "barelyhuman-dev",
      instances: 1,
      exec_mode: 'cluster',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      wait_ready: true,
      listen_timeout: 5000,
      "env_production": {
        "PORT": "3123",
      },
    },
  ],
  deploy: {
    production: {
      "user": "root",
      "host": ["barelyhuman.dev"],
      ref: "origin/main",
      "repo": "git@github.com:barelyhuman/barelyhuman.dev.git",
      path: "/apps/barelyhuman.dev",
      "post-deploy":
        "source ~/.nvm/nvm.sh; nvm use; yarn; yarn build; pm2 startOrRestart ecosystem.config.js --update-env --env production",
    },
  },
};
