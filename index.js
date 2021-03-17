window.onload = function myLoadFunction() {


};

const submit = document.querySelector("#submit");
let alerta = document.getElementById('alert');
alerta.style.display ="none";

let valueCard = document.getElementById('inputCard');
let valueCVC = document.getElementById('inputCVC');
let valueAmount = document.getElementById('inputAmount');
let valueName = document.getElementById('inputName'); 
let valueLastName = document.getElementById('inputLastName');
let valueCity = document.getElementById('inputCity');

// let valueState= document.getElementById('inputState');
// valueState.addEventListener("click", (e)=>{
// e.preventDefault();
// }, false);

let valuePostal= document.getElementById('inputPostal');

// let valueRadio= document.getElementById('checkRadio');

let valueTextArea= document.getElementById('textareaMessage');

submit.addEventListener("click", (e) => {
    if (valueCard.value.length == 16 
        && valueCVC.value.length == 4 
        && valueAmount.value != "" 
        && valueName.value != ""
        && valueLastName.value != ""
        && valueCity.value != ""
        && valuePostal.value != ""
        && valueTextArea.value != ""
        ){
        //go a head
        console.log("Form send");  
    } else {
        e.preventDefault();
        alerta.style.display ="block";
        console.log("error");
    }
}, false);