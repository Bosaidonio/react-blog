FROM nginx:1.15-alpine
COPY build /etc/nginx/html
COPY nginx.conf /etc/nginx
WORKDIR /etc/nginx/html