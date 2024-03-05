// Kursaufgabe 20240304 - Aufgabe 2.2:
// Erstelle eine passende Test-Datei für "minMax.js".
// Überlege selbst jeweils 3 sinnvolle Testfälle. Implementiere diese.
// Es darf bei Abgabe kein Test fehlschlagen.

const minMax = require("./minMax.js");

test("Minimum von 3 und 5 ist 3", () => {
  expect(minMax.min(3, 5)).toBe(3);
});

test("Minimum von -2 und 10 ist -2", () => {
  expect(minMax.min(-2, 10)).toBe(-2);
});

test("Minimum von 8 und 8 ist 8", () => {
  expect(minMax.min(8, 8)).toBe(8);
});

test("Maximum von 3 und 5 ist 5", () => {
  expect(minMax.max(3, 5)).toBe(5);
});

test("Maximum von -2 und 10 ist 10", () => {
  expect(minMax.max(-2, 10)).toBe(10);
});

test("Maximum von 8 und 8 ist 8", () => {
  expect(minMax.max(8, 8)).toBe(8);
});
