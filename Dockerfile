ARG NODE_VERSION=16
ARG PORT=80

FROM node:$NODE_VERSION-alpine as build

WORKDIR /app
COPY . .

RUN npm ci --silent
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY config/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]

