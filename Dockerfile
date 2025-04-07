FROM klakegg/hugo:0.111.3-ext-ubuntu AS builder

WORKDIR /src

COPY . .

RUN git submodule update --init --recursive

RUN hugo --minify -D

FROM nginx:alpine

LABEL maintainer="Ali Mashally"
LABEL description="Shika Hugo Theme"
LABEL version="1.0"

RUN chmod -R 755 /usr/share/nginx/html

COPY --from=builder /src/public /usr/share/nginx/html

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]