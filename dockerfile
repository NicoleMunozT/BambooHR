FROM cypress/base:20.17.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g cypress

COPY . .

RUN npx cypress verify

CMD ["npx", "cypress", "run"]