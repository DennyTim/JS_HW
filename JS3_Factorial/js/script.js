let numRes = () => {
	let n = Number(prompt('Введите число для вычисления факториала?',''));
    let result = 1;
    while (!n == 0) {
        result *= n--;
    }
    return result;
};

alert(numRes());
