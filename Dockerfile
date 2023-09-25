# Node version 18
FROM node:18

# Creating work directory
WORKDIR /app

# Copying package.json and installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Executing the app
CMD ["node", "index.js", "./var/rinha/source.rinha.json"]
