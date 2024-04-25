let operatorButtons = document.getElementsByClassName('operator');
let firstNumber = undefined;
let secondNumber = undefined;
let numberInput = document.getElementById('numberInput');
let operator = undefined;
let resultInput = document.getElementById('result');

const calc = (firstNumber, secondNumber, operator) => {
    switch(operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
    }
}

const operatorBtnClick = (ev) => {
    switch(ev.target.innerText) {
        case '+':
        case '-':
        case '*':
        case '/':
            /* za input, img polja se koristi value */
            firstNumber = parseInt(numberInput.value); /* value daje tip podatka string */
            numberInput.value = "";
            operator = ev.target.innerText;
            break;
        default:
            if (firstNumber === undefined) {
                alert("Mora se odabrati operacija!");
            }
            else {
                secondNumber = parseInt(numberInput.value);
                let result = calc(firstNumber, secondNumber, operator);
                resultInput.value = result;
                firstNumber = secondNumber = operator = undefined;
            }
            break;
    }
}

for(let i = 0; i < operatorButtons.length; i++) {
    let currentBtn = operatorButtons[i];
    currentBtn.addEventListener('click', operatorBtnClick);
}