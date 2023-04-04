FROM node:16-buster AS base

ARG APP_VERSION="xxx"
WORKDIR /home/node/app
COPY / /home/node/app
RUN yarn install --network-timeout 1000000000  && yarn run build && cp build/index.html build/tpl.html
RUN echo $APP_VERSION >> build/version.html


FROM httpd:latest AS httpd
ENV API_URL="http://localhost:1000"
ENV SENTRYDSN=""
ENV YBUG_ID=""
ENV BASENAME=""
ENV ROUTING_TYPE="HashRouter"

COPY entrypoint.sh /usr/local/bin/httpd-foreground
COPY --from=base /home/node/app/build /usr/local/apache2/htdocs/
