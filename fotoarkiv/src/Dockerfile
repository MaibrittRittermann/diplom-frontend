FROM node:18.3.0-alpine
WORKDIR /app
COPY package*.json .
COPY . .
RUN npm install
ENV REACT_APP_API_URL=http://localhost:3000/api
EXPOSE 3000
CMD ["npm", "run", "start"]