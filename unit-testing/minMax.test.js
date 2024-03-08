// Kursaufgabe 20240304 - Aufgabe 2.2:
// Erstelle eine passende Test-Datei für "minMax.js".
// Überlege selbst jeweils 3 sinnvolle Testfälle. Implementiere diese.
// Es darf bei Abgabe kein Test fehlschlagen.
// --> ERLEDIGT.
// -----------------------------------------------------------------------
// Kursaufgabe 20240305 - Aufgabe 1:
// Überarbeitet eure Testfiles von gestern.
// Ihr sollt mithilfe des heutigen Vormittags alle Testfiles
// sinnvoll mit describe strukturieren und alle Tests sollten
// sinnvoll in Arrange, Act, Assert aufgeteilt sein
// (dabei darf Arrange leer sein).
// Es müssen also in der Abgabe für diese Aufgabe also die
// gleichen Dateien wie gestern enthalten sein, nur "cleaner".
// --------------------------------------------------------------------
// "siehe Änderung 1":
// test("Minimum von 3 und 5 ist 3", () => {
//   expect(minMax.min(3, 5)).toBe(3);
// });
// "siehe Änderung 2":
// test("Minimum von -2 und 10 ist -2", () => {
//   expect(minMax.min(-2, 10)).toBe(-2);
// });
// "siehe Änderung 3":
// test("Minimum von 8 und 8 ist 8", () => {
//   expect(minMax.min(8, 8)).toBe(8);
// });
// // "siehe Änderung 4":
// test("Maximum von 3 und 5 ist 5", () => {
//   expect(minMax.max(3, 5)).toBe(5);
// });
// "siehe Änderung 5":
// test("Maximum von -2 und 10 ist 10", () => {
//   expect(minMax.max(-2, 10)).toBe(10);
// });
// "siehe Änderung 6":
// test("Maximum von 8 und 8 ist 8", () => {
//   expect(minMax.max(8, 8)).toBe(8);
// });

const minMax = require("./minMax.js");

// "Änderung 1":
describe("Min-Max Tests", () => {
  describe("Min Funktion", () => {
    test("Sollte den kleineren Wert zwischen 3 und 5 zurückgeben", () => {
      // Arrange
      const a = 3;
      const b = 5;

      // Act
      const result = minMax.min(a, b);

      // Assert
      expect(result).toBe(3);
    });
  });

  // "Änderung 2":
  test("Sollte den kleineren Wert zwischen -2 und 10 zurückgeben", () => {
    // Arrange
    const a = -2;
    const b = 10;

    // Act
    const result = minMax.min(a, b);

    //  Assert
    expect(result).toBe(-2);
  });

  // "Änderung 3":
  test("Sollte den kleineren Wert zwischen 8 und 8 zurückgeben", () => {
    // Arrange
    const a = 8;
    const b = 8;

    // Act
    const result = minMax.min(a, b);

    //  Assert
    expect(result).toEqual(8);
  });

  // "Änderung 4":
  describe("Max Funktion", () => {
    test("Sollte den größeren Wert zwischen 3 und 5 zurückgeben", () => {
      // Arrange
      const a = 3;
      const b = 5;

      // Act
      const result = minMax.max(a, b);

      // Assert
      expect(result).toBe(5);
    });

    // "Änderung 5":
    test("Sollte den größeren Wert zwischen -2 und 10 zurückgeben", () => {
      //  Arrange
      const a = -2;
      const b = 10;

      // Act
      const result = minMax.max(a, b);

      //Assert
      expect(result).toBe(10);
    });

    // "Änderung 6":
    test("Sollte den größeren Wert zwischen 8 und 8 zurückgeben", () => {
      //  Arrange
      const a = 8;
      const b = 8;

      // Act
      const result = minMax.max(a, b);

      // Assert
      expect(result).toBe(8);
    });
  });
});
