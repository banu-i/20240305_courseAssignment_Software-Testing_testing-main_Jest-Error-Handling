function sum(a, b) {
  const result = a + b;
  return result;
}

function divide(a, b) {
  return a / b;
}

// Kursaufgabe 2040304 - Aufgabe 1
// // Ergänze die calculator.js aus dem Vormittag um passende
// "subtract(a,b)" und "multiply(a,b)" Funktionen.
// Schreibe für beide jeweils 3 Tests und setze a und b dabei wie folgt:
// a und b positiv
// a oder b negativ
// a oder b ist 0

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Im Browser/in Javascript: export default ...
// Wir sind hier aber in NodeJS!
module.exports.sum = sum;
module.exports.divide = divide;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
