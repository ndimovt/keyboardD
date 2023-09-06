const inputField = document.getElementById("inputField");
const button = document.getElementsByClassName("button");
document.getElementById("delete").addEventListener("click", deleteLastLetter);
document.getElementById("space").addEventListener("click", spacing);
const upperCase = document.getElementById("upper_case").addEventListener("click", testing);

let upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function printLetter(button){
    myArray = [button.value];
    for(let i = 0; i < myArray.length; i++){
        inputField.value += myArray[i];
    }
}

function deleteLastLetter() {
    let currentValue = inputField.value;
    inputField.value = currentValue.slice(0, -1);
}

function spacing(){
    let spaceValue = " ";
    inputField.value += spaceValue;
}

function testing(button){
    let upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let myChoice = button.value;
    for(let i = 0; i < upperCaseArray.length; i++){
        if(myChoice == upperCaseArray[i]){
            alert(upperCaseArray[i]);
        }

    }
}


