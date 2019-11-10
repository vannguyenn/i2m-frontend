FROM node:12.13-stretch-slim
WORKDIR /app
RUN npm install -g yarn lerna
COPY . .
RUN lerna bootstrap
RUN lerna run build
ENTRYPOINT [ "lerna", "run", "start" ]