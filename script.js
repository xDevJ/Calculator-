const buttons = document.querySelectorAll('.item');
const display = document.querySelector('.item0');

console.log(buttons[3]);



// function when button is clicked to display num
let number = 0;
buttons.forEach(bt => {
    bt.addEventListener('click', (e) => {
        number = e.target.innerHTML;
        display.innerHTML = number;
    });
});




