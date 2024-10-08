University: [ITMO University](https://itmo.ru/ru/)\
Faculty: [FICT](https://fict.itmo.ru)\
Course: [Application containerization and orchestration](https://github.com/itmo-ict-faculty/application-containerization-and-orchestration)\
Year: 2023/2024\
Group: K4113c\
Author: Komarov Alexey Nikolaevich\
Practice: practice4\
Date of create: \
Date of finished: \

## Описание
Это четвертая практическая работа "Разработка технической документации, тестирование готового продукта"

## Цель работы
Данная работа предполагает создание технической документации для программного продукта и проведение тестирования его функциональности.

## Документация

# Проект: Менеджер Задач (Task Manager)

## Описание

Этот проект представляет собой менеджер задач с двумя основными сущностями: пользователи и задачи. Пользователь может создавать, обновлять и удалять задачи. Каждая задача включает в себя название, описание, крайний срок (дедлайн), категорию и приоритет (низкий, средний, высокий).

Фронтенд построен на **React**, бэкенд на **NestJS**, а данные хранятся в базе данных **MongoDB**. Проект упакован в Docker и может быть запущен в контейнере.

---

## Стек технологий

- **Frontend**: React, TypeScript
- **Backend**: NestJS, TypeScript
- **База данных**: MongoDB
- **Контейнеризация**: Docker, Docker Compose
- **Документация API**: Swagger

---

## Структура проекта

### Фронтенд (React)
- Пользователи могут зарегистрироваться и войти в систему.
- После аутентификации отображается список задач в виде карточек.
- Карточки задач содержат название, дедлайн и приоритет, с цветовой индикацией (зелёный, жёлтый, красный).
- Задачи сортируются по дедлайну.

### Бэкенд (NestJS)
- API для регистрации, входа, создания и обновления задач.
- JWT-аутентификация для защиты маршрутов.
- MongoDB используется для хранения данных о пользователях и задачах.

---

## Запуск проекта

### Сборка и запуск с помощью Docker

1. **Клонируйте репозиторий проекта:**

   ```bash
   git clone https://github.com/SoosRamirez/2023_2024-application_containerization_and_orchestration-k4113c-komarov_a_n.git
   cd 2023_2024-application_containerization_and_orchestration-k4113c-komarov_a_n
   ```

2. **Запуск проекта с использованием Docker Compose:**

   Запустите все сервисы (фронтенд, бэкенд, MongoDB) с помощью Docker Compose:

   ```bash
   docker-compose up -d --build
   ```

3. **Открытие приложения:**

   Перейдите по адресу в браузере:

   ```bash
   http://localhost:80
   ```

4. **Swagger API Документация:**

   Документацию API можно найти по адресу:

   ```bash
   http://localhost:3000/api/docs
   ```

---

## Основные команды

### Для разработки

- **Запуск фронтенда**: `npm start` в директории `/frontend`
- **Запуск бэкенда**: `npm run start:dev` в директории `/backend`

### Для продакшена

- **Сборка фронтенда**: `npm run build` в директории `/frontend`
- **Сборка бэкенда**: `npm run build` в директории `/backend`

---

## API Маршруты

### Аутентификация

- `POST /auth/signup` – Регистрация нового пользователя.
- `POST /auth/login` – Вход в систему и получение JWT токена.

### Задачи

- `GET /tasks` – Получение всех задач пользователя (требуется токен).
- `POST /tasks/create` – Создание новой задачи (требуется токен).
- `PUT /tasks/:id` – Обновление задачи по её ID (требуется токен).
- `DELETE /tasks/:id` – Удаление задачи по её ID (требуется токен).

---

## Лицензия
Этот проект распространяется под лицензией MIT.
