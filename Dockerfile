FROM ubuntu

RUN  apt-get update
RUN  apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
RUN  bash nodesource_setup.sh
RUN  apt install nodejs
RUN npm install -g nodemon
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.ts index.ts

CMD ["nodemon", "index.ts"]

