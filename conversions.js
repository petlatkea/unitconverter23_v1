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
