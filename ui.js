"use strict"

function displayOutputValue( value ){
    let outputValue;
    outputValue = value.toFixed(2);
    document.querySelector("#outputvalue").textContent = outputValue;

}