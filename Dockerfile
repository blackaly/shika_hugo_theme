FROM klakegg/hugo:0.107.0-ext-ubuntu AS builder

WORKDIR /src

COPY . .
RUN git submodule update --init --recursive

# Build the Hugo site
RUN hugo --minify -D

FROM nginx:alpine
RUN chmod -R 755 /usr/share/nginx/html
COPY --from=builder /src/public /usr/share/nginx/html


EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]