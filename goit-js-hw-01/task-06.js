'use strict';

let total = 0;
let input = +prompt('Введите только число');
while (input) {
  total += input;
  input = +prompt('Вводите сколько хотите');
}
alert(`Общая сумма чисел равна ${total}`);

let total = 0;
let input;
do {
  input = Number(prompt(`entr your number`));
  total += Number(input);
} while (input !== null);
alert(`The sum of your numbers is ${total}`);
