let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === 'C') {
            display.innerText = '';
        } else if (button.innerText === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error';
            }
        } else {
            display.innerText += button.innerText;
        }
    });
});
