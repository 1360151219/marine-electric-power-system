FROM node:14.15.0 as builder
COPY . .
RUN npm config set -g registry https://registry.npm.taobao.org
RUN npm install

RUN npm run build
FROM nginx:alpine as server

COPY --from=builder nginx.conf /etc/nginx/nginx.conf
COPY --from=builder build /var/www/electronic/
WORKDIR /var/www/electronic/ 
# FROM nginx:latest
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY public /var/www/blog/
