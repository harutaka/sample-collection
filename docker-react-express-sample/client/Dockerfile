FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /scripts

COPY package.json package-lock.json /scripts/

RUN npm install --production --no-progress

COPY . .

EXPOSE 3000

CMD ["npm", "start"]