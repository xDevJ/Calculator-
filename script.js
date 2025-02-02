const buttons = document.querySelectorAll('button');
const display = document.querySelector('.item0');
let calcValue = '0';
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;


function updateDisplay(){
    const display = document.getElementById('display');
    display.innerHTML = calcValue;
    if(calcValue.length > 9){
        display.innerHTML = calcValue.substring(0, 9);
    }
}
updateDisplay();



// function when buttons are clicked - logs button to console
function clickButton(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', () => {
           
            if(buttons[i].classList.contains('num')){
                clickNumber(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('opr')){
                clickOperator(buttons[i].value);   
            } else if(buttons[i].classList.contains('equals')){
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('clear')){
                clearDisplay();
                updateDisplay();
            }
        });
    }
        
    
}
clickButton();

// function when numbers are clicked
function clickNumber(number){
  if(firstOperator === null){
    if(calcValue === '0' || calcValue === 0){
        calcValue = number;
    } else if(calcValue === firstNumber){
        calcValue = number
    } else {
        calcValue += number;
    }
  } else {
    if(calcValue === firstNumber){
        calcValue = number;
    } else {
        calcValue += number;
    }
  }
}


// function when operators are clicked
function clickOperator(operator){
   if(firstOperator != null && secondOperator === null){
    secondOperator = operator;
    secondNumber = calcValue;
    result = operate(Number(firstNumber), Number(secondNumber), firstOperator);
    calcValue = roundAccurately(result, 15).toString();
    firstNumber = calcValue;
    result = null;
   } else if(firstOperator != null && secondOperator != null){
    secondNumber = calcValue;
    result = operate(Number(firstNumber), Number(secondNumber), secondOperator);
    calcValue = roundAccurately(result, 15).toString();
    firstNumber = calcValue;
    result = null;
   } else {
    firstOperator = operator;
    firstNumber = calcValue;
   }
    
}

// function when equal sign is clicked

function inputEquals(){
    if(firstOperator === null){
        calcValue = calcValue;
    } else if(secondOperator != null){
        secondNumber = calcValue;
        result = operate(Number(firstNumber), Number(secondNumber), secondOperator);
        if(result = 'err'){
            displayValue = 'err'
        } else {
            calcValue = roundAccurately(result, 15).toString();
            firstNumber = calcValue;
            secondNumber = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        secondNumber = calcValue;
        result = operate(Number(firstNumber), Number(secondNumber), firstOperator);
        if(result === 'err'){
            calcValue = 'err';
        } else {
            calcValue = roundAccurately(result, 15).toString();
            firstNumber = calcValue;
            secondNumber = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}
    


function clearDisplay(){
    calcValue = '0';
    firstNumber = null;
    secondNumber = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
} 


function operate(x, y, op){
    if(op === '+'){
        return x + y;
    } else if(op === '-'){
        return x - y;
    } else if(op === '*'){
        return x * y;
    } else if(op === '/'){
        if(y === 0){
            return 'err'
        } else {
            return x / y;
        }
    }
 
} 


function roundAccurately(num, places){
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}