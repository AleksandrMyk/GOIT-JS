'use strict';

const findLongestWord = function (string) {
	let wordsArr = string.split(' ');
	let longestWord = '';
	for (let word of wordsArr) {
		if (word.length > wordsArr.length)
			longestWord = word;
	}
	return longestWord;

};
console.log(findLongestWord('debitis dolores! Ratione sed suscipit mollitia? Reprehenderit odit suscipit'));
console.log(findLongestWord('Google loves McDonalds'));
console.log(findLongestWord('dolores harum perferendis id eaque, nisi'));


//==выводит самое длинное слово числом======================================================
// const findLongestWord = function (string) {
// 	let wordsArr = string.split(' ');
// 	// console.log(string);
// 	let longestWord = 0;
// 	for (let i = 0; i < wordsArr.length; i += 1) {
// 		if (wordsArr[i].length > longestWord) {
// 			longestWord = wordsArr[i].length;
// 		}
// 	}
// 	return longestWord;
// };