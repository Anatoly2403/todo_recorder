FROM node:16.17.0-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

VOLUME [ "/app/data" ]

CMD [ "yarn", "run", "serve"]