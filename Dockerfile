FROM nginx:1.15-alpine
COPY build /etc/nginx/html
WORKDIR /etc/nginx/html