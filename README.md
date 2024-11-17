# Webpack

## Основные команды
В `package.json` добавлены скрипты, позволяющие выполнять следующие команды:
```sh
npm run dev  # запускает сборку проекта для работы в development окружении
npm run build  # запускает сборку проекта для работы в production окружении
npm run serve  # запускает webpack-dev-server
npm run stylelint  # запускает линтер для стилей
npm run lint:write  # запускает линтер для кода
```

Добавлены два файла настроек: `webpack.config.js` и `prod.config.js` для запуска в разных окружениях (dev, prod).
В `webpack.config.js` настроен hot module replacement.

Запуск JSON-сервера осуществляется `json-server -w db.json`. Для взаимодействия с JSON-сервером в файл `src/index.ts` добавлены функции.

В файл `.husky/pre-commit` добавлены настройки, осуществляющие запуск `lint-staged` при коммите. 
`lint-staged` осуществялет проверку:

- файлов с расширениями `.js`, `.jsx` и `.ts` через `eslint` и `prettier`;
- файлов с расширениями `.css` через `stylelint`.
