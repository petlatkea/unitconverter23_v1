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
