function userAccess () {
	let user = null;
	let age = null;

	let checkVar = function () {
		while (user == null || age == null || isNaN(age) || !isNaN(user)) {
			alert("Error!!")
        	user = prompt('What is your name?', '');
			age = Number(prompt('What is your age?', ''));
		}
	}

	this.getUserName = function () {
		user = prompt('What is your name?', '');
		age = Number(prompt('What is your age?', ''));
		checkVar();
	}

	this.checkAccess = function () {
		if (age < 18 ) {
			alert("You are not allowed to visit this website");
		} else if (18 <= age && age <= 22) {
			let enter = confirm("Are you sure you want to continue?");
			if (enter) {
				alert("Welcome, " + user);
			} else {
				alert("You are not allowed to visit this website");
			}
		} else if (age => 22) {
			alert("Welcome, " + user);
		}
	}
}

let user =  new userAccess();
user.getUserName();
user.checkAccess();


/*
function checkName (name) {
    let testName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(name);
    while (name == null || testName == false) {
        alert("Must be name!")
        name = prompt('What is your name?', '');
        testName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(name);
    }
    return name;
}

function checkNumber (age) {
    while (age == null || isNaN(age)) {
        alert("Age must be number");
        age = Number(prompt('What is your age?', ''));
    }
    return age;
}

function example (name, age) {
    if (age < 18 ) {
        alert("You are not allowed to visit this website");
    } else if (18 <= age && age <= 22) {
        let enter = confirm("Are you sure you want to continue?");
        if (enter) {
            alert("Welcome, " + name);
        } else {
            alert("You are not allowed to visit this website");
        }
    } else if (age => 22) {
        alert("Welcome, " + name);
    }
}

let name = prompt('What is your name?','');
let age = prompt('What is your age?','');
name = checkName(name);
age = checkNumber(age);
example(name, age);
*/
