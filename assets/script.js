function getOutput(){
	return document.getElementById('output').innerText;
}
function printOutput(num){
	if (num == ''){
		document.getElementById('output').innerText=num;

	} else {
		document.getElementById('output').innerText=numberFormatted(num);

	}
}

// formatted number to show 
function numberFormatted(num){
	let n = Number(num);
	let value = n.toLocaleString("en");
	return value;
}

//workable number to work with
function workableNumber(num){
	return Number(num.replace(/,/g,''));
}
//function to get the numbers
let numbers = document.getElementsByClassName('number');
for(let i = 0; i<numbers.length; i++){
	numbers[i].addEventListener('click', function(){
		let output = workableNumber(getOutput());
		if(output != NaN){
			output = output + this.id;
			printOutput(output);
		}

	})
}
//function to get the point character
let pointing = document.getElementsByClassName('pointing');
for(let i = 0; i<pointing.length; i++){
	pointing[i].addEventListener('click', function(){
		alert('Pointing:'+this.id);
	})
}
//function to get the operators
let operation = document.getElementsByClassName('operators');
for(let i = 0; i<operation.length; i++){
	operation[i].addEventListener('click', function(){
		if (this.id == "AC"){
			printOutput("");
		} else if (this.id == "clear"){
			let output = workableNumber(getOutput()).toString();
			if(output){
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		} else {
			///////////////////////////////////////
		}

	})
}
//function t get the numbers
