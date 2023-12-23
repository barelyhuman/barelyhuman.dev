APP_NAME=barelyhuman-dev
PORT=3123

build:
	yarn; yarn build

logs:
	pm2 logs ${APP_NAME}

start:
	pm2 start 'PORT=${PORT} node ./.output/server/index.mjs' --name=${APP_NAME}

kill:
	pm2 del ${APP_NAME}

stop:
	pm2 stop ${APP_NAME}

restart:
	pm2 restart ${APP_NAME} --update-env

update: 
	git pull --rebase
	make build
	make restart
