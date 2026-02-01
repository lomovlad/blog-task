### Blog App

**Blog App** — тестовое задание для компании "Polis.online".  

Задача: Разработка простого блога с комментариями.

Функциональность: просмотр списка статей, просмотр отдельной статьи, добавление статей, чтение и добавление комментариев.

Backend реализован по принципам REST API.
Покрытие ключевого функционала обеспечено автотестами.

---

### Установка и запуск

#### 1. Клонирование проекта

```bash
git clone https://github.com/lomovlad/blog-task.git
cd blog-task
```
#### 2. Скопируйте файл окружения для backend-приложения:
```bash
cp backend/.env.example backend/.env
```
#### 3. Запустите Docker Compose для сборки и запуска контейнеров:
```bash
docker compose up --build
```
#### 4. Проверьте настройки подключения к MySQL в .env:
```ini
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=blog
DB_USERNAME=user
DB_PASSWORD=secret
```
#### 4. Перейдите в контейнер backend для работы с базой данных:
```bash
docker compose exec backend bash
```
#### 5. Установка зависимостей и подготовка backend:
Перейдите в контейнер backend:
```bash
docker compose exec backend bash
```
Сгенерируйте ключ приложения, выполните миграции и сидеры:
```bash
php artisan key:generate
php artisan migrate
php artisan db:seed
```
#### (Опционально) Запуск фронтенда локально без Docker:
```bash
cd frontend
npm install
npm start
```
---
### Стек

- **Backend:** Laravel 12, PHP 8.4, MySQL
- **Frontend:** React, JavaScript
- **Контейнеризация:** Docker, Docker Compose
- **Прочее:** React Router для маршрутизации
