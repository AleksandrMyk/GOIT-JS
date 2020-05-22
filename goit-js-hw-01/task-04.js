'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt('Укажите количество дроидов, которое хотите купить');

if (quantity === null) {
	alert('Отменено пользователем!');
} else {
	let totalPrice = quantity * pricePerDroid;
	if (totalPrice > credits) {
		alert(`Вам не хватает ${totalPrice - credits}`);
	} else {
		alert(`Вы заказали ${quantity} дроидов. Общая сумма заказа ${totalPrice}. 
		На Вашем счету осталось ${credits - totalPrice}`)
	}
}