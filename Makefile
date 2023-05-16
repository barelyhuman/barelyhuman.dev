APP_NAME=barelyhuman-dev

build:
	yarn; yarn build

start:
	pm2 start .output/server/index.mjs --name=${APP_NAME}

kill:
	pm2 del ${APP_NAME}

stop:
	pm2 stop ${APP_NAME}

restart:
	pm2 restart ${APP_NAME} --update-env

update: 
	git pull --rebase
	make restart
