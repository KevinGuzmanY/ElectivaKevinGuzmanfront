# Use a Node.js base image for the build stage
FROM node:10.13.0 as build-stage

# Define working directory
WORKDIR /app

COPY . ./

# Instala Angular CLI
RUN npm install -g @angular/cli@11.2.12

# Install dependencies
RUN npm install

# Build the Angular application
RUN npm run build --prod

# Use nginx server to deliver the application
FROM nginx:alpine

# Copy built files from the build stage to nginx directory
COPY --from=build-stage /app/dist/Fproject2/ /usr/share/nginx/html

# Replace the default nginx configuration with custom configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
