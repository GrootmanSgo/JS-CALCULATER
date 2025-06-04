//Reference DISPLAY ELEMENT
const display = document.getElementById('display');

//Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:',value);

    let currentValue = display.value;

    if(justCalculated && !isNaN(value)) {
     display.value = value;
     justCalculated = false;
     return;
    }

    //if vurrent display show 0 and user enters a number, we wanna replace the 0
     if(currentValue === "0" && !isNaN(value)){
        display.value = value;
     }else if(currentValue === '0' && value=== '.'){
        display.value = currentValue + value;
     }else{
        display.value = currentValue + value;
     }

    // Reset the justCalculated flag when user strts typing
     justCalculated = false;

     console.log('Display updated to:', display.value);
}

function clearDisplay() {
    console.log('Clear button pressed');

    alert('clear button was clicked');
}

function deletedLast() {
    console.log('Backspace button pressed')

    let currentValue = display.value;

    // IF 
    if(currentValue.length)

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