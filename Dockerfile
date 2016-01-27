FROM node:0.10.33
RUN mkdir /feed-registry
WORKDIR /feed-registry
RUN apt-get update && \
    apt-get -y install nginx;

ADD bower.json /feed-registry/bower.json

RUN npm install -g bower
RUN bower install --allow-root

ADD . /feed-registry
RUN npm install -g ember-cli
RUN npm install


RUN ember build --output-path /var/www/html/feed-registry --environment=staging

CMD nginx -g 'daemon off;'
