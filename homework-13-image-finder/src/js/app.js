import apiService from'./apiService.js';
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import items from '../templates/items.hbs';


const refs = {
	searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('#gallery'),
  button: document.querySelector('button[data-action="load-more"]'),
  image: document.querySelector('#gallery_image'),
}
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.button.addEventListener('click', loadMoreBtnHandler);
refs.gallery.addEventListener('click', handleOriginalImage);

function handleOriginalImage(evt) {
  const instance = basicLightbox.create(`
     <img src="${evt.target.dataset.source}" width="100%">
 `);

  instance.show();
  console.log(evt.target.dataset.source);
}

function searchFormSubmitHandler(e) {
  e.preventDefault();

  apiService.page;

  const form = e.currentTarget;
  const input = form.elements.query;

  clearListItems();

  apiService.resetPage();
  apiService.searchQuery = input.value;
 requestImagesApi();

  input.value = '';
}

function requestImagesApi() {
  apiService
    .requestImages()
    .then(images => {
      insertListItems(images);
    })
    .catch(error => console.warn(error))
};

function insertListItems(images) {
  const markup = items(images);

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.gallery.innerHTML = '';
}

function loadMoreBtnHandler() {
  if (apiService.page > 1) {
    apiService.requestImages().then(images => {
      insertListItems(images);
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
  }
}