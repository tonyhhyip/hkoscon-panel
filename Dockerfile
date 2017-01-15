FROM node:6-alpine

COPY . /app
WORKDIR /app

RUN npm install --production

CMD["npm", "run", "start"]