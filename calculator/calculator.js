function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((acc, e) => acc + e, 0);
}

function multiply (arr) {
	return arr.reduce((acc, e) => acc * e, 1);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	if (a <= 1) {
		return 1;
	}
	return a * factorial(a-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}