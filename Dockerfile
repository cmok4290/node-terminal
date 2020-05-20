# Latest LTS version of node
FROM node:12

# create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

# set up non-root user
RUN userdel -r node
RUN useradd -ms /bin/bash explore
COPY me /home/explore

# bundle app source
COPY . .

# map port to docker daemon
# not supported by heroku
# EXPOSE 8080

USER explore
WORKDIR /home/explore

# best practice, reduce number of processes running inside container
CMD ["node","/usr/src/app/server.js"]
