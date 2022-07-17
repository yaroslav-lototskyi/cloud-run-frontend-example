FROM node:17-slim

WORKDIR /app
COPY . .
RUN npm install && npm run build

CMD npm start
