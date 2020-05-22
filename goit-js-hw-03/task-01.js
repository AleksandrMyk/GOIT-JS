'use strict';

const user = {
	name: 'Mango',
	age: 20,
	hobby: 'html',
	premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const userInfo = Object.keys(user);
for (let info of userInfo) {
	console.log(`${info}: ${user[info]}`);
}