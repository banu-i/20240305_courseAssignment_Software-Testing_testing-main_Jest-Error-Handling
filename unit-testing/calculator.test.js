const calculator = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  const result = calculator.sum(2, 5);

  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
  const result = calculator.sum("Apfel", 5);

  expect(result).toEqual("Apfel5");
});

test("Der Quotient aus 10 durch 2 ist 5", () => {
  const result = calculator.divide(10, 2);

  expect(result).toEqual(5);
});

test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
  const result = calculator.divide(10, 3);

  expect(result).toBeCloseTo(3.33, 2);
});

test("Postive durch negative Zahl ist kleiner als 0", () => {
  const result = calculator.divide(10, -2);

  expect(result).toBeLessThan(0);
});

test("Negativ durch negative Zahl ist größer als 0", () => {
  const result = calculator.divide(-10, -2);

  expect(result).toBeGreaterThan(0);
});

// Kursaufgabe 2040304 - Aufgabe 1
// // Ergänze die calculator.js aus dem Vormittag um passende
// "subtract(a,b)" und "multiply(a,b)" Funktionen.
// Schreibe für beide jeweils 3 Tests und setze a und b dabei wie folgt:
// a und b positiv
// a oder b negativ
// a oder b ist 0

test("Die Differenz von 5 - 3 ist 2", () => {
  const result = calculator.subtract(5, 3);
  expect(result).toEqual(2);
});

test("Die Differenz von 3 - 5 ist -2", () => {
  const result = calculator.subtract(3, 5);
  expect(result).toEqual(-2);
});

test("Die Differenz von 0 - 5 ist -5", () => {
  const result = calculator.subtract(0, 5);
  expect(result).toEqual(-5);
});

test("Das Produkt von 2 * 3 ist 6", () => {
  const result = calculator.multiply(2, 3);
  expect(result).toEqual(6);
});

test("Das Produkt von -2 * 3 ist -6", () => {
  const result = calculator.multiply(-2, 3);
  expect(result).toEqual(-6);
});

test("Das Produkt von 0 * 3 ist 0", () => {
  const result = calculator.multiply(0, 3);
  expect(result).toEqual(0);
});
