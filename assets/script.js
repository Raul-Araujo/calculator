function getOutput(){
	return document.getElementById('output').innerText;
}
function printOutput(num){
	document.getElementById('output').innerText=num;
}

let numbers = document.getElementsByClassName('number');
for(let i = 0; i<numbers.length; i++){
	numbers[i].addEventListener('click', function(){
		alert('Operator:'+this.id);
	})
}
let pointing = document.getElementsByClassName('pointing');
for(let i = 0; i<pointing.length; i++){
	pointing[i].addEventListener('click', function(){
		alert('Operator:'+this.id);
	})
}
let operation = document.getElementsByClassName('operators');
for(let i = 0; i<operation.length; i++){
	operation[i].addEventListener('click', function(){
		alert('Operator:'+this.id);
	})
}