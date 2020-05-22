"use strict";

const refs = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const KEYCODE_ESC = 27;

const list = document.querySelector('.js-gallery');
const box = document.querySelector('.lightbox');
const lightboxSrc = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('.lightbox__button');
const closeWindow = document.querySelector('.lightbox__content');

list.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeWindow.addEventListener('click', closeModal);
window.addEventListener("keyup", closeEsc);

// заполнение и добавление списка
const fillUpList = refs.forEach(el => {
   list.insertAdjacentHTML('afterbegin', `
<li class="gallery__item">
  <a
    class="gallery__link"
    href = "${el.original}" 
    target = "blank" >
    <img
      class="gallery__image"
      src = "${el.preview}"
      data-source = "${el.original}"
      alt = "${el.description}" / >
  </a>
</li>
`);
})

function openModal(event) {
  // Открытие мод окна
  box.classList.add('is-open');
  // подмена значения атрибута src
  event.preventDefault();
  refs
    .map(el => el.original)
    .find((el) => {
      if (el === event.target.dataset.source)
        lightboxSrc.src = el;
    })
};

function closeModal (event) {
  if (event.target === lightboxSrc) {
    return;
  } else 
    // закрытие мод окна
    box.classList.remove('is-open');
  // очистка src
  lightboxSrc.src = '';
  // закрытие мод окна на диве
};

 //закрытие мод окна ESC
function closeEsc(event) {
  if (event.keyCode === KEYCODE_ESC) {
    box.classList.remove('is-open');
  }
};