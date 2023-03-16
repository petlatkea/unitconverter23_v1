"use strict";

// `feetToM( feet )` – modtager fod, regner om til meter
// `mToFeet( meters )` – modtager meter, regner om til fod

function feetToM(feet) {
  const FEET_PER_M = 0.3048;
  return feet * FEET_PER_M;
}

function mTofeet(meters) {
  const M_PER_FOD = 3.2808;
  return meters * M_PER_FOD;
}
