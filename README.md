# lizaalert_frontend
Платформа для обучения добровольцев "ЛизаАлерт" - Frontend

## Полезные ссылки:
[Notion](https://www.notion.so/Workspase-1078a8066a6e45fbb9ad07854f7e0f38)

[Макет](https://www.figma.com/file/FasUcYffR2kJAhPvBGcACW/LizaAlert-Mockups?node-id=155%3A5905)

## Стек:
- React
- Javascript
- react-router-dom v6
- PropTypes
- Css module

## Наименование файлов и папок:
- Называть директории и файлы компонентов в нотации kebab-case

## Файловая структура:

Приложение будет построено на основве атомарного дизайна.
Распределение по дерикториям:
- components\atoms: простые компоненты, из которых строятся более сложные компоненты. Не могут включать в себя другие атомы,
- components\molecules: состоят из атомов и представляют собой цельный полезный элемент. Включают простую логику и свои стили,
- components\organisms: сочетания молекул, существующих вместе. Также могут включать в себя атомы,
- components\templates: разметка. Если вам нужен компонент, который бы просто разместил некоторые не связанные компоненты по определенной верстке,
- components\pages: конечная точка роутера, финальный рендер целой страницы,
- assets: изображения, шрифты и иконки,
- config: конфигурационные файлы проекта + константы и роуты,
- hooks: кастомные реакт-хуки для выноса общей логики,
- router: роутер проекта,
- services/api: запросы к API.


## Работа с git:
1. Участник клонирует проект
2. Создаёт ветку с нужным префиксом
3. Комитит изменения, в начале названия комита пишет номер задачи который он решает со знака #, например "#21-created-Button-component"
4. По окончанию работы над задачей делает Pull Request

Пример наименование ветки: enhancement-14-index-page

- enhancement - префикс
- 14 - id задачи
- index-page - краткое описание

Префиксы веток описаны тут: https://github.com/marketplace/actions/prefix-pr-labeler#release-drafter-category-settings


