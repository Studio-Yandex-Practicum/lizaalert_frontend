# LizaAlert (frontend)

Платформа для обучения добровольцев "ЛизаАлерт" - frontend

## Полезные ссылки:

### [Notion](https://www.notion.so/Workspase-1078a8066a6e45fbb9ad07854f7e0f38)

### [Макет](https://www.figma.com/file/FasUcYffR2kJAhPvBGcACW/LizaAlert-Mockups?node-id=155%3A5905)

### [Storybook](https://lizaalert-storybook.netlify.app/)

## Стек:

- React
- TypeScript
- react-router-dom v6
- Redux Toolkit
- Axios
- SCSS module
- Docker & Nginx

## [Стайлгайд](./docs/style-guide.md)

## Инструкции по запуску dev-режима

Версия Node.js должна быть не менее `v16`. На время установки пакетов рекомендуется отключить антивирус, чтобы корректно поставился и инициализировался `lefthook`

**1. Установить зависимости командой:**

```bash
npm ci
```

Пакеты поставятся на основе дерева в `package-lock.json`.

В дальнейшем в PR не должно быть изменений `package-lock.json` за исключением
тех случаев, когда нужно поставить в проект новый пакет или обновить зависимости.

**2. После успешной установки зависимостей создать файл `.env.development`, скопировать в него переменные из `.env.example` и обновить в соответствии с текущими доменами/IP бекенда**

После этого можно писать код и коммитить.

### Запуск базовой версии

```bash
npm start
```

### Запуск версии с моковыми данными

Необходимо, если бекенд не готов или упал.

```bash
npm run start:mock
```

Приложение откроется на порту `:3000`

## Файловая структура:

Приложение построено на основе атомарного дизайна.
Распределение по директориям:

- **components/atoms**: простые компоненты, из которых строятся более сложные
  компоненты. Не могут включать в себя другие атомы
- **components/molecules**: состоят из атомов и представляют собой цельный
  полезный элемент. Могут включать простую логику
- **components/organisms**: сочетания молекул, существующих вместе. Также могут
  включать в себя другие организмы и атомы
- **components/templates**: разметка. В разметке не может быть бизнес-логики и
  состояния
- **api**: файлы запросов к API, модели API и моковые данные
- **assets**: изображения, шрифты и иконки
- **config**: конфигурационные файлы проекта
- **hooks**: кастомные реакт-хуки
- **lib**: самописные библиотеки
- **pages**: конечная точка роутера, финальный рендер целой страницы
- **router**: роутер проекта
- **store**: файлы по работе с глобальным стором
- **styles**: глобальные стили и переменные
- **types**: файлы с глобальными и конфигурационными типами
- **utils**: утилитарные простые функции и глобальные константы

## Работа с git:

1. Участник клонирует проект
2. Устанавливает зависимости по инструкции
3. Создаёт ветку с нужным префиксом (см. ниже)
4. Комитит изменения, в начале названия комита пишет номер задачи который он
   решает со знака #, например `#21-create-Button-component`
5. По окончанию работы над задачей делает Pull Request
6. После оформления Pull Request запускаются автотесты.
   Если рядом с PR есть красный крестик, значит код в PR невалидный.
   Смотрим тесты, ищем причину, по которой они не прошли, исправляем, снова
   комитим в ту же ветку.
7. После этого проходит кросс-ревью
8. Код проверяется лидом, после чего, если все ок и нет замечаний, **лид делает
   squash коммитов и мерджит в master-ветку**
9. Без согласования с лидом самостоятельно PR не мерджим, в master не пушим

Пример именования ветки: `enhancement-14-index-page`

- enhancement - префикс
- 14 - id задачи
- index-page - краткое описание

Если задача не заведена, то вид ветки следующий: `enhancement/index-page`.
Опускается id, префикс и описание разделяются косой чертой.

## Префиксы:

- **build**: изменение, связанное со сборкой проекта
- **bug**: исправление ошибок, багов
- **deprecation**: убираем легаси
- **development**: разработка новой фичи/компонента
- **documentation**: документация
- **enhancement**: улучшение, доработки уже существующей фичи
- **maintenance**: всякий техдолг (рефакторинг, опечатки и т.д.)
- **revert**: откат на раннюю реализацию
- **style**: исправления по код-стайлу без изменения функционала (пробел, PEP8)
- **test**: добавление или изменение тестов

## Чеклист перед сдачей на ревью:

- Все пункты [стайлгайда](./docs/style-guide.md)
- Не допускать ошибок в консоли
- Использовать миксины и scss - переменные
- Использовать готовые компоненты, следить за изменениями проекта
- Осуществлять реэкспорт компонентов и модулей через файлы `index.ts` в папке
  компонента или модуля
- Выносить объявление функций, не зависящих от пропов, вне компонента
- Обновлять стейт с учётом последнего состояния
- Выносить “магические значения” в константы
- Удалять обработчики при размонтировании компонентов, следить за утечками
  памяти
