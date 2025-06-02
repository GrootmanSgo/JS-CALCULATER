//Reference DISPLAY ELEMENT
const display = document.getElementById('display');

//Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:',value);

    alert('You pressed:' +value);
}

function clearDisplay() {
    console.log('Clear button pressed');

    alert('clear button was clicked');
}

function deletedLast() {
    console.log('Backspace button pressed')

    alert('Backspace button was pressed')
}

function calculated() {
    console.log('Equals button pressed')

    alert('Equals button was pressed')
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Calculator loaded successfully');
    console.log('DIsplay elent', display);

    if (display) {
        console.log('Current display value:', display.value);
    }else{
        console.log('Display element not found');
    }
})