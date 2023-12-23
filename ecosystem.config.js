module.exports = {
  apps: [
    {
      name: 'barelyhuman-dev',
      script: 'PORT=3123 node .output/server/index.mjs',
      args: 'start',
      instances: 1,
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 5000,
    },
  ],
  deploy:{
    production : {
      "user" : "root",
      "host" : ["barelyhuman.dev"],
      ref:"origin/main",
      "repo":"git@github.com:barelyhuman/barelyhuman.dev.git",
      path:"/apps/barelyhuman.dev",
      "post-deploy":"source ~/.nvm/nvm.sh; nvm use; yarn; yarn build; pm2 startOrRestart ecosystem.config.js --env production"
  }
}
}
