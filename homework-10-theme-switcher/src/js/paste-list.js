import list from '../templates/list.hbs';
import data from '../menu.json';


const refs = {
    postFeed: document.querySelector('.js-menu')
  }
  
  function pasteList(data) {
    const markup = data.map(el => list(el)).join('')
    refs.postFeed.insertAdjacentHTML('beforeend', markup)
  }
  pasteList(data)