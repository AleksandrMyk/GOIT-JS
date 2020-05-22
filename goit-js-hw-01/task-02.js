'use strict';

const total = 100;
let ordered = 0;
const zero = 0;

if (ordered === zero) {
	console.log('Заказать товар не возможно!! Введите число больше чем 0.');
} else if (ordered > total) {
	console.log('На складе недостаточно твоаров!');
} else {
	console.log('Заказ оформлен, с вами свяжется менеджер');
}