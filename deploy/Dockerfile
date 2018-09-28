FROM node:10 as builder

WORKDIR /app

COPY package.json .
RUN yarn

COPY public public
COPY src src
RUN yarn build

FROM nginx:1.15

WORKDIR /app

EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build/ .
