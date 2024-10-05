FROM node:16-alpine
LABEL authors="Rus"

WORKDIR /app

COPY ./package.json ./
RUN npm i
COPY ./ ./

CMD ["npm", "run", "start"]