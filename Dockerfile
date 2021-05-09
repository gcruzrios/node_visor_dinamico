FROM node:14-alpine3.13

WORKDIR /

COPY . .
RUN npm install

CMD ["node", "index.js"]

