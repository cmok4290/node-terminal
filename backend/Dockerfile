# Latest LTS version of node
FROM node:12

# create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

# bundle app source
COPY . .

# map port to docker daemon
EXPOSE 8080

# best practice, reduce number of processes running inside container
CMD ["node","server.js"]
