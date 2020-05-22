'use strict';

const countTotalSalary = function (employees) {
	let salaryItems = Object.values(employees);
	let totalSalary = 0;
	for (let summ of salaryItems) {
		totalSalary += summ;
	}
	return totalSalary;
};

console.log(countTotalSalary({}));

console.log(
	countTotalSalary({
		mango: 100,
		poly: 150,
		alfred: 80,
	}),
); // 330

console.log(
	countTotalSalary({
		kiwi: 200,
		lux: 50,
		chelsy: 150,
	}),
); // 400