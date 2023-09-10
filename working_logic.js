const textInput = document.getElementById('inputField');
const keyboard = document.getElementById('h3');

document.addEventListener('keydown', (event) => {
    if(event.target !== document.getElementById('clear')){
        const key = event.key;
        const button = keyboard.querySelector(`[data="${key}"]`);
        textInput.value += key;
        if(key === 'Backspace'){
            pressDel();
        }
        if(key === 'CapsLock'){
            pressCaps();
        }
        if(key === 'Shift'){
            let shiftValue = textInput.value;
            textInput.value = shiftValue.slice(0, -5);
        }
        if(key === 'Enter'){
            pressEnter();
        }
        button.classList.add('blink');
        setTimeout(() =>{
            button.classList.remove('blink');
        }, 300);
}});

function pressEnter(){
    let input = textInput.value;
    textInput.value = input.slice(0, -5);
    document.getElementById('text').innerHTML += input.slice(0, -5);
    textInput.value = " ";
}

function pressCaps(){
    let fieldValue = textInput.value;
    textInput.value = fieldValue.slice(0, -8);
}

function pressDel(){
    let currentValue = textInput.value;
    textInput.value = currentValue.slice(0, -10);
}









