#test with `docker build -t foo . && docker run  -p 8080:80 -it foo`
FROM node:20-buster AS base

ARG APP_VERSION="xxx"
WORKDIR /home/node/app
COPY / /home/node/app
RUN yarn install --network-timeout 1000000000  && yarn run build && cp dist/index.html dist/tpl.html
RUN echo $APP_VERSION >> dist/version.html


FROM php:apache AS httpd
ENV API_URL="http://localhost:1000"
ENV SENTRYDSN=""
ENV YBUG_ID=""
ENV BASENAME=""
ENV ROUTING_TYPE="HashRouter"

COPY entrypoint.sh /usr/local/bin/httpd-foreground
ENTRYPOINT /usr/local/bin/httpd-foreground
COPY --from=base /home/node/app/dist /var/www/html
COPY config/php/index.php /var/www/html/index.php

RUN a2enmod rewrite
