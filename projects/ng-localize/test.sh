docker rm some-nginx -f
docker run --rm -it --name some-nginx -v $(pwd)/dist/mfi18n:/usr/share/nginx/html:ro -d nginx
