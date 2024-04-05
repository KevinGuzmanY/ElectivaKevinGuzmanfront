LABEL authors="kevin"

FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ng build --prod

EXPOSE 8081

CMD ["ng", "serve", "--host", "0.0.0.0:8081"]
