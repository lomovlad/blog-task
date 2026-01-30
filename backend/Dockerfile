FROM php:8.4-fpm

# Установка зависимостей
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    && docker-php-ext-install \
    pdo \
    pdo_mysql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd

# Установка Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Копирование проекта
COPY . .

# Права на storage и cache
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 storage bootstrap/cache

# Установка зависимостей PHP
RUN composer install --no-dev --optimize-autoloader

EXPOSE 9000
CMD ["php-fpm"]
