# Node for express by Miroslaw Dubaj
FROM node:8

# opening port
EXPOSE 8080

# creating working directory
RUN mkdir -p usr/src/app

# install nodemon for node development
RUN npm install nodemon -g

# install webpack for node development
RUN npm install webpack -g 

# install webpack-dev-server for node development
RUN npm install webpack-dev-server -g 

# setting working directory
WORKDIR /usr/src/app

# copying package.json of project
COPY package.json package.json

# installing dependencies
RUN npm install && npm cache clean --force

# copying project content
COPY . .

# start container commands with endpoint in bin/www
CMD ["npm", "run", "start:dev"]
