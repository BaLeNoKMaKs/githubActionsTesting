FROM node:lts
WORKDIR /study
COPY . /cct
CMD npm run start
