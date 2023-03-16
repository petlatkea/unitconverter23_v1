function fToC(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}
function cToF(celcius) {
  let fahrenheit = celcius * 1.8 + 32;
  return fahrenheit;
}
console.log(fToC(-200));
