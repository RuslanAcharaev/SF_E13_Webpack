# Webpack

## Основные команды
В `package.json` добавлены скрипты, позволяющие выполнять следующие команды:
```sh
npm run dev  # запускает сборку проекта для работы в development окружении
npm run build  # запускает сборку проекта для работы в production окружении
npm run serve  # запускает webpack-dev-server
npm run stylelint  # запускает линтер для стилей
npm run eslint  # запускает линтер для кода
```

Добавлены два файла настроек: `webpack.config.js` и `prod.config.js` для запуска в разных окружениях (dev, prod).
В `webpack.config.js` настроен hot module replacement.

Запуск JSON-сервера осуществляется `json-server -w db.json`. Для взаимодействия с JSON-сервером в файл `src/index.ts` добавлены функции.

В файл `.husky/pre-commit` добавлены настройки, осуществляющие запуск линтера при коммите. 
