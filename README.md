# BookSharing

Web-приложение для обмена книгами _(book sharing)_.

## Запуск приложения

1. Запускаем MySQL script libwebTABLE.sql, коннектим созданную бд с кодом в файле /server/connectingToDB.js
2. Заполняем базу данных
3. Запускаем код

Открываем два терминала
- **Первый**
  - **Переходим в нужную папку**
    - cd client
  - **Устанавливаем пакеты**
    - npm install react-router-dom@5
    - npm i axios
    - npm install react-calendar
  - **Запускаем**
    - npm start
- **Второй**
  - **Переходим в нужную папку**
    - cd server
  - **Устанавливаем пакеты**
    - npm init
    - npm i express config
    - npm i -D nodemon
    - npm i mysql
    - npm i cors
    - npm i devenv
  - **Запускаем**
    - node index.js

для того, чтобы полулючиться к Вашей базе данных, можно обратиться к файлу .env и поменять значения (в папке server)

![](https://github.com/Ereme007/BookSharing.../blob/main/pictures/1.png)
![](https://github.com/Ereme007/BookSharing.../blob/main/pictures/2.png)
![](https://github.com/Ereme007/BookSharing.../blob/main/pictures/3.png)
![](https://github.com/Ereme007/BookSharing.../blob/main/pictures/4.png)
![](https://github.com/Ereme007/BookSharing.../blob/main/pictures/5.PNG)
