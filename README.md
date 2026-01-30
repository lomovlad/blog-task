## Blog App

### Описание
**Blog App** — fullstack-проект на Laravel (backend) и React (frontend).  

Педставляет собой простой блог, где можно:
- Просматривать список статей
- Просматривать отдельные статьи
- Добавлять новые статьи
- Читать и оставлять комментарии

  **Backend реализован по принципам REST API**, frontend взаимодействует с ним через **fetch**.
---

### Технологии и стек

- **Backend:** Laravel 12, PHP 8.4, MySQL
- **Frontend:** React, JavaScript
- **Контейнеризация:** Docker, Docker Compose
- **Прочее:** React Router для маршрутизации

---
### Контейнеризация

Проект полностью контейнеризирован с помощью Docker:

- **Backend (Laravel/PHP-FPM)**
    - Контейнер `backend` с PHP 8.4 и Composer
    - Содержит исходный код Laravel и работает с MySQL
    - Подключается к общей сети `blog-network` для взаимодействия с другими сервисами

- **Frontend (React)**
    - Контейнер `frontend` с Node.js 20
    - Dev-сервер React (`npm start`) доступен на порту 3000
    - Подключен к общей сети для доступа к backend API

- **Database (MySQL 8)**
    - Контейнер `db` хранит базу данных проекта
    - Настройки пользователя и пароля указаны через переменные окружения
    - Данные сохраняются в volume `db_data`, чтобы сохранять состояние при перезапуске контейнера

- **Nginx (в продакшн или прокси)**
    - Прокси для backend и frontend
    - Контейнер `web` с Nginx настраивает маршрутизацию и доступ к Laravel

Все контейнеры объединены в одну сеть `blog-network`, что позволяет backend, frontend и БД взаимодействовать друг с другом без проброса лишних портов наружу.

### Установка и запуск

#### 1. Клонирование проекта

```bash
git clone <URL вашего репозитория>
cd blog-task
```
#### 2. Запустите Docker Compose для сборки и запуска контейнеров:
```bash
docker compose up --build
```
#### 3. Проверьте настройки подключения к MySQL в .env:
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
#### 5. Выполните миграции и сидеры:
```bash
php artisan migrate
php artisan db:seed
```
#### (Опционально) Запуск фронтенда локально без Docker:
```bash
cd frontend
npm install
npm start
```
