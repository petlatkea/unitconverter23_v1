"use strict";

function convert(conversionType, value) {
  switch (conversionType) {
    case "inchToCm":
      return inchToCm(value);
      break;

    case "cmToInch":
      return cmToInch(value);
      break;

    case "milesToKm":
      return milesToKm(value);
      break;

    case "kmToMiles":
      return kmToMiles(value);
      break;

    case "fToC":
      return fToC(value);
      break;

    case "cToF":
      return cToF(value);
      break;

    case "feetToM":
      return feetToM(value);
      break;

    case "mToFeet":
      return mToFeet(value);
      break;

    case "lbsToKg":
      return lbsToKg(value);
      break;

    case "kgToLbs":
      return kgToLbs(value);
      break;

    case "gToL":
      return gToL(value);
      break;

    case "lToG":
      return lToG(value);
      break;
  }

}


function feetToM(feet) {
  const FEET_PER_M = 0.3048;
  return feet * FEET_PER_M;
}

function mTofeet(meters) {
  const M_PER_FOD = 3.2808;
  return meters * M_PER_FOD;
}
