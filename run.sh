docker build -t i18n-nginx . --no-cache
docker rm run-i18n-nginx -f
docker run -p 80:80 --name run-i18n-nginx -d i18n-nginx
docker container ls
docker logs run-i18n-nginx --follow
