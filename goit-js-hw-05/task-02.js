'use strict';

class User {
	constructor(user) {
		this.name = user.name;
		this.age = user.age;
		this.followers = user.followers;
	}
	getInfo() {
		console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
	}
}
const mango = new User({
	name: 'Mango',
	age: 2,
	followers: 20,
});
mango.getInfo();

const sasha = new User({
	name: 'Sasha',
	age: 300,
	followers: 0,
});
sasha.getInfo();