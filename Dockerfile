FROM nginx:stable
MAINTAINER "famri@alterra.id"

RUN mkdir -p /alterra/www/frontenduser.fikriamri.xyz
RUN mkdir -p /alterra/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /alterra/www/frontenduser.fikriamri.xyz/

WORKDIR /alterra/www/frontenduser.fikriamri.xyz
