FROM node:6-alpine

COPY . /app
WORKDIR /app

RUN npm install -g pm2 --quiet && \
    npm install --production --quiet

EXPOSE 8080
CMD ["pm2-docker", "start", "--env=production", "--only", "hkoscon-backend"]