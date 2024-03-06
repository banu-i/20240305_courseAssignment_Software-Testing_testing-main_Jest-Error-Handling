// Kursaufgabe 20240326 - Aufgabe 2:
// Ihr sollt in dieser Aufgabe die AgeFunction.test.js so erweitern,
// dass die Funktion isAdult eine Line-Coverage von 100% hat.

// TEST für ein Alter "größer" oder "gleich" 18
// TEST für ein Alter "kleiner" als 18
// TEST für ein "negatives Alter"
// TEST für ein "nicht-nummerisches Alter"

const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });

  test("TEST für ein Alter größer 18", () => {
    expect(isAdult(27)).toBe(true);
  });

  test("TEST für ein Alter kleiner 18", () => {
    expect(isAdult(16)).toBe(false);
  });

  test("TEST für ein negatives Alter", () => {
    expect(() => {
      isAdult(-27);
    }).toThrow(TypeError);
  });

  test("TEST für ein nicht-nummerisches Alter", () => {
    expect(() => {
      isAdult("18");
    }).toThrow(TypeError);
  });
});
