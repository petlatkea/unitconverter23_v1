"use strict";

function displayInputUnit( conversion ){
     document.querySelector("#inputunit").textContent = getInputUnit(conversion);    
}

function getInputUnit( conversion ){

    if (conversion === "inchToCm"){
        return "inches"
    } else if( conversion === "cmToInch"){
        return "centimeter"
    } else if(conversion === "milesToKM"){
        return "miles"
    } else if(conversion === "kmToMiles"){
        return "kilometer"
     }else if(conversion === "fToC"){
        return "fahrenheit"
     }else if(conversion === "cToF"){
        return "celcius"
     }else if(conversion === "feetToM"){
        return "feet"
     }else if(conversion === "mToFeet"){
        return "meter"
     }  else if(conversion === "lbsToKg"){
        return "pound"
     }  else if(conversion === "kgToLbs"){
        return "kilo"
     } else if(conversion === "gToL"){
        return "gallons"
     }  else conversion === "lToG";
     {
        return "liters";
     }


}


function displayOutputValue( value ){
    let outputValue;
    outputValue = value.toFixed(2);
    document.querySelector("#outputvalue").textContent = outputValue;

}

function displayOutputUnit(conversion) {
  document.querySelector("#outputunit").textContent = getOutputUnit(conversion);
}

function getOutputUnit(conversion) {
  if (conversion === "inchToCm") {
    return "cm";
  } else if (conversion === "cmToInch") {
    return "inches";
  } else if (conversion === "milesToKm") {
    return "km";
  } else if (conversion === "kmToMiles") {
    return "miles";
  } else if (conversion === "fToC") {
    return "celcius";
  } else if (conversion === "cToF") {
    return "fahrenheit";
  } else if (conversion === "feetToM") {
    return "m";
  } else if (conversion === "mToFeet") {
    return "ft";
  } else if (conversion === "lbsToKg") {
    return "kg";
  } else if (conversion === "kgToLbs") {
    return "lbs";
  } else if (conversion === "gToL") {
    return "l";
  } else if (conversion === "lToG") {
    return "g";
  }
}
