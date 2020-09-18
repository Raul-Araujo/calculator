
function add (...Args) {
	return Args.reduce(function (previous, next){
		return previous + next;
	});
}

function subtract (...Args) {
	return Args.reduce(function (previous, next){
		return previous - next;
	});
}

function sum (Args) {
	let soma = 0;
	for (let key  in Args){
		soma += Args[key];
	}
	return soma;
}

function multiply (Args) {
	let mult = 1;
	for (let key in Args){
		mult *= Args[key];
	}
	return mult;
}