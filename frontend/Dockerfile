FROM node:20

WORKDIR /app

COPY . .

RUN npm install && npm run build

# Используем nginx для отдачи сборки
FROM nginx:latest
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
