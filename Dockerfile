FROM nginx
COPY ./projects/ng-localize/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/mfi18n /usr/share/nginx/html
