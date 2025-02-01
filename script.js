const numbers = document.querySelectorAll('.op');
const operators = document.querySelectorAll('.opr')
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.item0');






// function when buttons are clicked - logs button to console
function clickButton(){
    buttons.forEach(bt => {
        bt.addEventListener('click', () => {
           console.log(bt)
           
           
        })
    })
}
clickButton();




