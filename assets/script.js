
// the adding function
function add (...Args) {
	return Args.reduce(function (previous, next){
		return previous + next;
	});
}

// the sbstraction function
function subtract (...Args/*It is possible here to add as many arguments as possible*/) {
	return Args.reduce(function (previous, next){
		return previous - next;
	});
}

// the multiplication function
function multiply (Args/*This is an array catcher*/) {
	let mult = 1;
	for (let key in Args){
		mult *= Args[key];
	}
	return mult;
}
// the multiplication function
function multiply (Args/*This is an array catcher*/) {
	let mult = 1;
	for (let key in Args){
		mult /= Args[key];
	}
	return mult;
}