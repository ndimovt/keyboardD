const textInput = document.getElementById('inputField');
document.getElementById('h3').addEventListener('keydown', myFunction);

function myFunction(event) {
    let key = event.key;
    textInput.value += key;
    if(key == 'Backspace'){
        let currentValue = textInput.value;
        textInput.value = currentValue.slice(0, -10);
    }
    if(key == 'CapsLock'){
        let fieldValue = textInput.value;
        textInput.value = fieldValue.slice(0, -8);
    }
}



