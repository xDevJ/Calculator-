const buttons = document.querySelectorAll('button');
const display = document.querySelector('.item0');
let calcValue = 0;
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;


function updateDisplay(){
    const display = document.getElementById('display');
    display.innerHTML = calcValue;
    
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
  
}


// function when operators are clicked
function clickOperator(operator){
   
    
}

// function when equal sign is clicked

function inputEquals(){
    
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