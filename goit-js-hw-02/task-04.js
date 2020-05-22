'use strict';

const formatString = function (string) {
	let shortString = string.slice(0, 40);
	if (shortString.length < string.length) {
		shortString += "...";
	}
	return shortString;
};

console.log(formatString('Подпоясал, его буквенных.'))
console.log(formatString('Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.'));
console.log(formatString('Lorem ipsum dolor, sit amet conse dolor, sit amet conse dolor'));
console.log(
	formatString(
		'Грамматики снова, то предложения если, себя знаках моей ручеек предупредила напоивший бросил его рыбными собрал там',
	),
);