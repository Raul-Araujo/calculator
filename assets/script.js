//get the output
function getOutput(){
    return document.getElementById('output').innerText;
}
//printing the output
function printTheOutput(number){
    if(number == ""){
        document.getElementById('output').innerText=number;

    } else {
    document.getElementById('output').innerText=formattedNumber(number);
    }
}

function formattedNumber(number){
    let n = Number(number);
    let value = n.toLocaleString("en");
    return value;
}
function workableNumber(number){
    return Number(number.replace(/,/g,''));
}
// operator selection
const operation =  document.getElementsByClassName('operators');
for (let iterator = 0; iterator < operation.length; iterator++){
    operation[iterator].addEventListener('click', function(){
        if(this.id == 'allClear'){
            printTheOutput("");
        } else if(this.id == 'backspace'){
            let output = workableNumber(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printTheOutput(output);
            }
        } else {
            let output = getOutput();
            if(output != ""){
                output = workableNumber(output);
            }
        }
    });
}
// numbers selection
const numbers = document.getElementsByClassName('number');
for (let i = 0; i<numbers.length; i++){
    numbers[i].addEventListener('click', function(){
        let selected = workableNumber(getOutput());
        selected += this.id;
        printTheOutput(selected);
    });
}