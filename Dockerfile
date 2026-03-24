# Dockerfile for User API
FROM node:18

WORKDIR /app

# Kopiér package.json og package-lock.json
COPY package*.json ./

# Installer dependencies
RUN npm install

# Kopiér resten af koden
COPY . .

# Eksponer port 3000
EXPOSE 3000

# Start serveren
CMD ["node", "server.js"]