FROM node:alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
COPY . .
CMD node index.js