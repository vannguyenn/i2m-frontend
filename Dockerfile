FROM node:11-alpine

WORKDIR /app

COPY . /app

RUN yarn && \
    yarn build

CMD ["yarn","start"]