FROM node:buster AS base

# docker image build -t abc . && docker run -p 5000:5000 abc
# docker image build -t abc --build-arg STYLEGUIDE=TRUE --build-arg STORYBOOK=TRUE --build-arg COVERAGE=TRUE . && docker run -p 5000:5000 abc
WORKDIR /home/node/app
EXPOSE 5000
COPY / /home/node/app

ARG STORYBOOK=""
ARG STYLEGUIDE=""
ARG COVERAGE="TRUE"

RUN yarn install && yarn run build && mkdir storybook-static && mkdir styleguide && mkdir coverage

RUN test -z "$STORYBOOK" || yarn run storybook:build  && echo 'storybook-static'
RUN test -z "$STYLEGUIDE" || yarn run styleguidist:build && echo 'styleguide'
RUN test -z "$COVERAGE" || yarn run test-coverage && echo 'coverage'

FROM httpd:latest AS httpd
COPY --from=base /home/node/app/build /usr/local/apache2/htdocs/
COPY --from=base /home/node/app/styleguide /usr/local/apache2/htdocs/styleguide
COPY --from=base /home/node/app/storybook-static /usr/local/apache2/htdocs/storybook
COPY --from=base /home/node/app/coverage /usr/local/apache2/htdocs/coverage

RUN sed -i "s/80/5000/g" /usr/local/apache2/conf/httpd.conf 

