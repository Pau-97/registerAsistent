FROM node:16-alpine
WORKDIR /srv/app
COPY . .
RUN npm install
RUN apk update && apk add bash && apk add --no-cache tzdata
ENV TZ America/Lima
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --production
COPY . .
RUN chmod +x ./cron/entry.sh
RUN echo "America/Lima" >  /etc/timezone

RUN /usr/bin/crontab /srv/app/cron/crontab.txt
RUN pwd && ls -la ./cron
ENTRYPOINT ["sh", "/srv/app/cron/entry.sh"]
