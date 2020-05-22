'use strict';

let input;
let numbers = [];
let total = 0;

do {
  input = prompt('Введите ччисло!!');
  if (isNaN(input)) {
    alert('введите число а не цифру');
    break;
  } else {
    if (input) {
      numbers.push(Number(input));
    }
  }
} while (input !== null);
if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
