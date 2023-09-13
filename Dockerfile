# Node version 18
FROM node:18

# Creating work directory
WORKDIR /app

# Copying package.json and installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY index.js ./
COPY interpreter.js ./
COPY ./var/rinha/fib.json ./var/rinha/fib.json

# Executing the app
CMD [ "node", "index.js" ]
