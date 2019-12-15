FROM node:latest

# add directly the war
ADD mock.config.js /mock.config.js
ADD package.json /package.json
ADD mocks /mocks


RUN npm i -D cli-api-mocker
CMD npm run start

EXPOSE 9090
