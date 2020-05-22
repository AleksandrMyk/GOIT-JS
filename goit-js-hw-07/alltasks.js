
'use strict';

const allText = document.querySelector('html')
allText.style.color = '#eeff00';

// Task 1-------------------------------------------------------------------------

const sumOfCotegories = document.querySelectorAll('.item')
console.log(`List has ${sumOfCotegories.length} categories`);
const total = sumOfCotegories.forEach(el => {
	const titleName = el.querySelector('h2').innerHTML;
	const sumOfItems = el.querySelectorAll('li').length;
	console.log(`
	Категория: ${titleName}
	Количество элементов: ${sumOfItems}`
	);
})
// Task 2-------------------------------------------------------------------------

const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];

const listOfIngridients = document.querySelector('#ingredients');

ingredients.forEach(el => {
	let items = document.createElement("li");
	items.textContent = el;
	listOfIngridients.appendChild(items);
	console.log(items);
});

// Task 3-------------------------------------------------------------------------

const images = [
	{
		url:
			'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat',
	},
	{
		url:
			'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
	},
	{
		url:
			'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running',
	},
];

images.forEach(el => {
	document
		.querySelector('#gallery')
		.insertAdjacentHTML
		('beforeEnd', `
		<li class="list-items">
		<img src="${el.url}" alt="${el.alt}" class="img-items">
		</li>
		`);
});

// Task 4-------------------------------------------------------------------------

let counter = 0;

const incr = () => {
	counter += 1;
	document.querySelector('#value').textContent = counter;
};

const decr = () => {
	counter -= 1;
	document.querySelector('#value').textContent = counter;
};

document.querySelector('[data-action="increment"]').addEventListener('click', incr);
document.querySelector('[data-action="decrement"]').addEventListener('click', decr);

// Task 5-------------------------------------------------------------------------

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const emptyField = 'незнакомец';

input.addEventListener('input', e => {
	output.textContent = e.target.value || emptyField;
});

// Task 6-------------------------------------------------------------------------

const someValidInput = document.querySelector('#validation-input');
someValidInput.addEventListener('blur', validInvalid);

function validInvalid () {
	if (this.getAttribute('data-length') > this.value.length || 
		this.getAttribute('data-length') < this.value.length) {
		this.classList.remove('valid');
		this.classList.add('invalid');
	} else {
		this.classList.remove('invalid');
		this.classList.add('valid');
	}
};

// Task 7-------------------------------------------------------------------------

const rangeInput = document.querySelector("#font-size-control");
const resizedText = document.querySelector("#text");
rangeInput.addEventListener("input", moveSize);

function moveSize(event) {
	resizedText.style.fontSize = event.currentTarget.value + "px";
}