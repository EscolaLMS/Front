FROM node:16-buster AS base

WORKDIR /home/node/app
COPY / /home/node/app
RUN yarn install && yarn run build

FROM httpd:latest AS httpd
COPY --from=base /home/node/app/build /usr/local/apache2/htdocs/
