Задание - поиск изображений
Напиши небольшое приложение поиска и просмотра изображений по ключевому слову

Инструкции Pixabay API
Для HTTP-запросов используй публичный Pixabay API. Зарегистрируйся и получи ключ.

URL-строка запроса:

https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
Pixabay API поддерживает пагинацию, пусть в ответе приходит по 12 объектов, установлено в параметре per_page. По умолчанию параметр page равен 1. При каждом последующем запросе page увеличивается на 1, а при поиске по новому ключевому слову необходимо сбрасывать его значение в 1.

Каждое изобаржение описывается объектом.

{
  "comments": 78,
  "downloads": 63296,
  "favorites": 558,
  "id": 1508613,
  "imageHeight": 2135,
  "imageSize": 1630104,
  "imageWidth": 2894,
  "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
  "likes": 575,
  "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
  "previewHeight": 110,
  "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
  "previewWidth": 150,
  "tags": "cat, animal, cat portrait",
  "type": "photo",
  "user": "cocoparisienne",
  "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
  "user_id": 127419,
  "views": 127450,
  "webformatHeight": 472,
  "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
  "webformatWidth": 640
}
Тебе интересны следующие свойства:

webformatURL - ссылка на маленькое изображение для списка карточек
largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
likes - количество лайков
views - количество просмотров
comments - количество комментариев
downloads - количество загрузок
Форма поиска
Создает DOM-элемент следующей структуры. Можно использовать шаблонизацию.

<form class="search-form" id="search-form">
  <input
    type="text"
    name="query"
    autocomplete="off"
    placeholder="Search images..."
  />
</form>
Галерея изображений
Создает DOM-элемент следующей структуры.

<ul class="gallery">
  <!-- Список <li> с карточками изображений -->
</ul>
Карточка изображения
Создает DOM-элемент следующей структуры.

<div class="photo-card">
  <img src="" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      1108
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      320321
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      129
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      176019
    </p>
  </div>
</div>
Для иконок используются Material icons. Для их корректной работы достаточно в HTML-файле добавить ссылку на веб-шрифт.

<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
Или добавив npm-пакет material-design-icons и импортировав веб-шрифт в index.js.

Кнопка 'Load more'
При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими.

Страница должна автоматически плавно проскроливаться после рендера изображений ровно на один экран, чтобы перевести пользователя на начало загруженных изображений. Используй window.scrollTo().

Дополнительно
Можно добавить плагин нотификаций, например pnotify, и показывать нотификации на результат HTTP-запросов
Можно добавить функционал отображения большой версии изображения через плагин модального окна, например basicLightbox, при клике на изображение галереи
Вместо кнопки Load more можно сделать бесконечную загрузку при скроле используя плагин Infinite Scroll

Если бекенд вернул массив с одной страной, в интерфейсе рендерится разметка с данными о стране: название, столица, население, языки и флаг.




# Webpack starter kit &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

## Developing

### Prerequisites

Для корректной работы SASS-компилятора и других инструментов, необходимо один
раз глобально поставить дополнительные пакеты, выполнив в терминале (с правами
администратора) следующие команды. Пользователям MacOS ничего делать не нужно.

Пользователям **Windows**.

```shell
npm install --global windows-build-tools
```

Пользователям **Linux**.

```shell
sudo apt-get install gcc g++ make
```

### Setting up Dev

Для быстрого старта необходимо склонировать репозиторий.

```shell
git clone https://github.com/luxplanjay/webpack-starter-kit.git
```

Переименовать папку сборки по имени вашего проекта.

```shell
mv webpack-starter-kit имя_проекта
```

Затем перейти в папку проекта.

```shell
cd имя_проекта
```

Находясь в папке проекта удалить папку `.git` связанную с репозиторием сборки
выполнив следующую команду.

```shell
npx rimraf .git
```

Установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm start
```

Во вкладке браузера перейти по адресу
[http://localhost:4040](http://localhost:4040).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying/Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote)
репозитория. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном (remote) репозитории. Через какое-то время живую
страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`.
