FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY index.js ./
COPY interpreter.js ./
COPY ./var/rinha/fib.json ./var/rinha/fib.json

CMD [ "node", "index.js" ]
