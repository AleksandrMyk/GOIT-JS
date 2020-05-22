'use strict';

// const checkForSpam = function (message) {
// 	let lowCase = message.toLowerCase();
// 	let spam = lowCase.includes('spam') || lowCase.includes('sale');
// 	if (lowCase === spam) {
// 		true;
// 	} else {
// 		false;
// 	}
// 	return spam;
// };

const checkForSpam = function (message) {
	let spam = ['sale', 'spam'];
	for (let i = 0; i < spam.length; i += 1) {
		if (message.toLowerCase().includes(spam[i])) {
			return true
		}
	}
	return false;
}

console.log(checkForSpam('Lorem ipsum dolor sit amet, consectetur adipisicin')); // false
console.log(checkForSpam('Dolorem, quis temporibus impedit tenetur')); // false
console.log(checkForSpam('amet, consectetur sale adipisicing elit.')); // true
console.log(checkForSpam('[SPAM] ipsum dolor sit amet, consectetur')); // true