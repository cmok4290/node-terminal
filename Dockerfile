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
# EXPOSE 8080

# strongly recommended to run images as a non-root user
#RUN userdel -rf node
RUN useradd -m explore
USER explore
WORKDIR /home/explore

# best practice, reduce number of processes running inside container
CMD ["node","/usr/src/app/server.js"]
