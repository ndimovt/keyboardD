const textInput = document.getElementById('inputField');
const keyboard = document.getElementById('h3');

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const button = keyboard.querySelector(`[data-key="${key}"]`);
    textInput.value += key;
    if(key === 'Backspace'){
        let currentValue = textInput.value;
        textInput.value = currentValue.slice(0, -10);
    }
    if(key === 'CapsLock'){
        let fieldValue = textInput.value;
        textInput.value = fieldValue.slice(0, -8);
    }
    if(key === 'Shift'){
        let shiftValue = textInput.value;
        textInput.value = shiftValue.slice(0, -5);
    }
    button.classList.add('blink');
    setTimeout(() =>{
        button.classList.remove('blink');
    }, 300);
});










