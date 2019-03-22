FROM node

MAINTAINER fm_guerras@esi.dz

COPY . /var/www
WORKDIR /var/www


RUN npm install

EXPOSE 9000

ENTRYPOINT ["npm","start"]
