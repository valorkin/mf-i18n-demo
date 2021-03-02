yarn --cwd projects/ng-localize/
yarn --cwd projects/shell-app/

npm --prefix projects/ng-localize/ run build
npm --prefix projects/shell-app/ run build

chmod -R 777 projects/ng-localize/dist
chmod -R 777 projects/shell-app/dist

docker-compose build --no-cache

docker-compose up
