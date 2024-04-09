FROM node:10.13.0 as build-stage

WORKDIR /app

COPY . ./

RUN npm install -g @angular/cli@11.2.12

RUN npm install

RUN npm run build --prod

FROM nginx:alpine

COPY --from=build-stage /app/dist/Fproject2/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
