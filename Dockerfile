FROM node:16-buster AS base

WORKDIR /home/node/app
COPY / /home/node/app
RUN yarn install && yarn run build && cp build/index.html build/tpl.html

FROM httpd:latest AS httpd
ENV API_URL="http://localhost:1000"
COPY entrypoint.sh /usr/local/bin/httpd-foreground
COPY --from=base /home/node/app/build /usr/local/apache2/htdocs/
