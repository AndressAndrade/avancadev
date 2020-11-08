FROM node:13.12.0-alpine

WORKDIR /go/src/fullcycle

COPY . .

RUN npm install ts-node
RUN npm install --silent

EXPOSE 3333

CMD ["npm", "run", "start"]