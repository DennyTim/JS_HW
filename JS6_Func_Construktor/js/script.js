function createNewUser() {
	this.firstName = String(prompt("Enter your first name",""));
	this.lastName = String(prompt("Enter your last name",""));
	this.getLogin = getLogin;
	return this;
}

function getLogin() {
	let firstN = this.firstName;
	let lastN = this.lastName;
	let result = firstN.slice(0, 1).toLowerCase() + lastN.toLowerCase();
	return result;
}

let obj = new createNewUser();
console.log(obj.getLogin());
