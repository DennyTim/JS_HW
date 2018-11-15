function getNaturalsNumbers() {
	let start = null;
	let end = null;

	let checkVar = function() {
		while (start == end || start == 0 || end == 0 || start < 2 || end < 2 || isNaN(start) || isNaN(end)) {
			alert("Error, Numbers must be between 2 and (2^53-1)");
			start = Number(prompt("Enter the seed", ""));
			end = Number(prompt("Enter finite number", ""));
		}
		if (start > end) {
			[start, end] = [end, start];		//swap перемена переменных
		}
	}

	let isSimple = function(i) {
		let count = true;
		for (let j = 2; j < i; j++) {
			if (i % j) {
				continue;
			}
		count = false;
		break;
		}
		return count;
	}

	this.askVariables = function() {
		start = Number(prompt("Enter the seed", ""));
		end = Number(prompt("Enter finite number", ""));
		checkVar();
	}


	this.showSimpleVars = function() {
		for (var i = start; i <= end; i++) {
			if (isSimple(i)) console.log(i);
		}
	}
}

let naturalNumbers = new getNaturalsNumbers();
naturalNumbers.askVariables();
naturalNumbers.showSimpleVars();


/*function checkNaturalNumber(startNumber, endNumber) {
    while (startNumber == endNumber || startNumber == 0 || endNumber == 0 || startNumber > endNumber || startNumber < 2 || endNumber < 2) {
        alert("Error, Numbers must be between 2 and (2^53-1)");
        startNumber = Number(prompt("Enter the seed", ""));
        endNumber = Number(prompt("Enter finite number", ""));
    }

    let start = parseInt(startNumber);
    let end = parseInt(endNumber);

    for (var i = start; i <= end; i++) {
        var count = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j) {
                continue;
        }
        count += 1;
        }
        if (count == 2) console.log(i);
    }
}

let startNumber = Number(prompt("Enter the seed", ""));
let endNumber = Number(prompt("Enter finite number", ""));
checkNaturalNumber(startNumber, endNumber);*/
