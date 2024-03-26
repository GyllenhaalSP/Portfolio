FROM node:21.6.1-bullseye-slim as base

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn install && yarn cache clean

COPY . ./

FROM base as production

ENV NODE_PATH=./build
RUN yarn build

EXPOSE 3000