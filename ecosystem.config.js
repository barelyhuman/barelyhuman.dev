module.exports = {
  apps: [
    {
      name: 'barelyhuman-dev',
      script: './node_modules/.bin/nuxt',
      args: 'start',
      instances: 1,
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 5000,
    },
  ],
}
