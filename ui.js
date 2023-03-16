"use strict"


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

