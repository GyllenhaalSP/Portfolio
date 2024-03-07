FROM node:20.11.1 as base

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./

FROM base as production

ENV NODE_PATH=./build
RUN yarn build

EXPOSE 3000