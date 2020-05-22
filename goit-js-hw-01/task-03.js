'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
const modal = prompt('Укажите Ваш пароль');

if (modal === null) {
  alert('Отменено пользователем!');
} else if (modal !== ADMIN_PASSWORD && modal !== null) {
  alert('Доступ запрещен, неверный пароль!');
} else {
  alert('Добро пожаловать!');
}