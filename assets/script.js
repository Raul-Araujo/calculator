function getHistory(){
    return document.getElementById('history-value').innerText;
}

function printHistory(number){
    document.getElementById('history-value').innerText = number;
}

function getOutput(){
    return document.getElementById('output-value').innerText;
}

function printOutput(number){
    if(number==""){
        document.getElementById('output-value').innerText=number;
    } else {
        document.getElementById('output-value').innerText = getFormatterNumber(number);
    }
}

function getFormatterNumber(number){
    if (number == "-"){
        return "";
    }
    let n = Number(number);
    let value = n.toLocaleString("en");
    return value;
}

function workableNumber(number){
    return Number(number.replace(/,/g,''));
}

let operation = document.getElementsByClassName('operator');
for(let i = 0; i < operation.length; i++){
    operation[i].addEventListener('click', function(){
        if(this.id=='clear'){
            printHistory("");
            printOutput("");
        } else if (this.id=="backspace"){
            let output = workableNumber(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }

        } else {
            let output = getOutput();
            let history = getHistory();
            if(output =="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output != "" || history != ""){
                output = output==""?output:workableNumber(output);
                history = history + output;
                if(this.id == "="){
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
let numbers = document.getElementsByClassName('number');
for(let iterator = 0; iterator < numbers.length; iterator++){
    numbers[iterator].addEventListener('click', function(){
        let output = workableNumber(getOutput());
        if(output != NaN){
            output = output+this.id;
            printOutput(output);
        }
    });
}
