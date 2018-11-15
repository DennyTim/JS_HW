fibonachi = n => {
	while (isNaN(n)) {
		n = prompt(' Do you can enter the number?','');
		fibonachi(n);
	}
	
		let a = 1;
		let b = 1;
		for (let i = 3; i <= n; i++) {
			let c = a + b;
			a = b;
			b = c;
		}
		return b;
}

let ask = prompt('Enter the number','');
alert(fibonachi(ask));