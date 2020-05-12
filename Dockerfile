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

# set up user
RUN useradd -ms /bin/bash explore
USER explore
WORKDIR /home/explore
COPY me .

# best practice, reduce number of processes running inside container
CMD ["node","/usr/src/app/server.js"]
