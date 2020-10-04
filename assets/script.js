class Calculator {
    constructor(previousNumber, currentNumber){
        this.previousNumber = previousNumber;
        this.currentNumber = currentNumber;
        this.clear();
    }
    clearAll(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){

    }

    addNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){

    }

    calculation(){

    }

    updateDisplay(){
        this.currentNumber.innerText = this.currentOperand;
    }
}


const numbers = document.querySelectorAll('number');
const operation = document.querySelectorAll('operators');
const allClearButton = document.querySelector('allClear');
const deleting = document.querySelector('backspace');
const equalsTo = document.querySelector('[data-equals]');
const previousNumber = document.querySelector('history');
const currentNumber = document.querySelector('output');

const calculator = new Calculator(previousNumber, currentNumber);

numberTds.forEach(td => {
    td.addEventListener('click', () => {
        calculator.appendNumber(td.innerText);
        calculator.updateDisplay();
    });
});
