// script.js

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    let currentInput = '';
    let result = null;
    let lastOperation = '';

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');

            if (value === '=') {
                try {
                    result = eval(currentInput);
                    display.innerText = result;
                    currentInput = result;
                } catch {
                    display.innerText = 'Error';
                    currentInput = '';
                }
            } else if (value === 'C') {
                currentInput = '';
                display.innerText = '';
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });
});