import fetchCountries from './fetchCountries.js';
import list from '../tamplate/list.hbs';
import listItems from '../tamplate/listitems.hbs';
import debounce from 'lodash.debounce';
import { defaults } from '@pnotify/core';
import { error } from '@pnotify/core';



const refs = {
	searchForm: document.querySelector('#search-form'),
	countryList: document.querySelector('#country-list'),
	searchInput: document.querySelector('.search__input'),
};

refs.searchForm.addEventListener('submit', event => {
	event.preventDefault();
});

refs.searchForm.addEventListener(
	'input',
	debounce(e => {
		searchFormInputHandler(e);
	}, 500),
);

function searchFormInputHandler(e) {
	const searchQuery = e.target.value;

	clearListItems();

	fetchCountries(searchQuery).then(data => {
		const markup = buildListItemMarkup(data);
		const renderCountriesList = buildCountriesList(data);
		if (!data) {
			return;
		} else if (data.length > 10) {
			defaults.styling = 'material';
			error({
				type: 'error',
				text: 'Слишком много совпадений. Введите минимум 2 буквы!',
				delay: 1000,
				addClass: 'error',
			});
		} else if (data.length >= 2 && data.length <= 10) {
			insertListItem(renderCountriesList);
		} else if (data.length === 1) {
			insertListItem(markup);
		} else {
			alert('Такой страны нет!!');
		}
	});
}

function insertListItem(items) {
	refs.countryList.insertAdjacentHTML('beforeend', items);
}

function buildCountriesList(items) {
	return list(items);
}

function buildListItemMarkup(items) {
	return listItems(items);
}

function clearListItems() {
	refs.countryList.innerHTML = '';
}


	
