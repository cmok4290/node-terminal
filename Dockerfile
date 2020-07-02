# use latest node image
FROM node

# create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

# bundle app source
COPY . .

# map port to docker daemon
# not supported on heroku, bind with env instead
# EXPOSE 8080

# strongly recommended to run images as a non-root user
# RUN userdel -r node
# RUN useradd -m explore
# USER explore
USER node
WORKDIR /home/node/explore
COPY me .

# best practice, reduce number of processes running inside container
CMD ["node","/usr/src/app/server.js"]
