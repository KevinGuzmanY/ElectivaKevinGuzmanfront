# Usa una imagen base de Node.js
FROM node:10.13.0 as build-stage

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Instala Angular CLI
RUN npm install -g @angular/cli@11.2.12

# Compila la aplicación Angular
RUN ng build --prod

# Segunda etapa de la construcción para el despliegue
FROM node:alpine as deploy-stage

# Establece el directorio de trabajo para la etapa de despliegue
WORKDIR /app

# Copia los archivos compilados del build-stage a la etapa de despliegue
COPY --from=build-stage /app/dist /app

# Instala http-server para servir la aplicación
RUN npm install -g http-server

# Exponer el puerto en el que se ejecutará la aplicación Angular
EXPOSE 8081

# Comando para iniciar http-server y servir la aplicación
CMD ["http-server", "-p", "8081", "-o"]
