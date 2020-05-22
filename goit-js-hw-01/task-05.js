'use strict';

let countryDelivery = prompt('Введите страну доставки!').toLowerCase();
let costDelivery;

if (countryDelivery === null) {
  alert('Отменено пользователем');
} else {
  switch (countryDelivery) {
    case 'Китай':
      costDelivery = '100';
      break;
    case 'Чили':
      costDelivery = '250';
      break;
    case 'Австралия':
      costDelivery = '170';
      break;
    case 'Индия':
      costDelivery = '80';
      break;
    case 'Ямайка':
      costDelivery = '120';
      break;
    default:
      alert('Извините, но такой страны на нашей карте нет!!');
  }
  if (costDelivery) {
    alert(
      `Доставка в ${countryDelivery} будет стоить ${costDelivery} кредитов`,
    );
  }
}