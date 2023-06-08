# Використовуємо офіційний образ Node.js з Docker Hub
FROM node:14

# Встановлюємо теку робочого каталогу в контейнері
WORKDIR /app

# Копіюємо package.json та package-lock.json у контейнер
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь залишок проекту у контейнер
COPY . .

# Команда, яка виконується при запуску контейнера
CMD [ "node", "api.js" ]