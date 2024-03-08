// Kursaufgabe 20240308 - Aufgabe 2:

// 2.1 Kopiert euch die Datei Quiz.js in euer Repo
// 2.2 Erstellt einen Datei Quiz.test.js und Erstellt einen neuen Testfall
// 2.3 Erreicht eine Zeilen Abdeckung von 100% (line coverage)
// 2.4 Schreibt in die Beschreibung von euren Test cases welche Zeilen ihr abdeckt

const { isRightSolutionForQuestion } = require("./Quiz");

describe(isRightSolutionForQuestion, () => {
  test("Test für die richtige Antwort zu frage_1", () => {
    expect(
      isRightSolutionForQuestion("frage_1", "Weil er immer kalt gelötet ist.")
    ).toBe(true);
  });

  test("Test für die richtige Antwort zu frage_2 ", () => {
    expect(
      isRightSolutionForQuestion(
        "frage_2",
        "Weil sie sich ständig im Code verheddern."
      )
    ).toBe(true);
  });

  test("Test für die richtige Antwort zu frage_3 ", () => {
    expect(
      isRightSolutionForQuestion("frage_3", "Weil er einen Virus hatte.")
    ).toBe(true);
  });

  test("Test für die richtige Antwort zu frage_4 ", () => {
    expect(isRightSolutionForQuestion("frage_4", "Logout.")).toBe(true);
  });

  test("Test für die richtige Antwort zu frage_5 ", () => {
    expect(
      isRightSolutionForQuestion(
        "frage_5",
        "Sie hatte zu viele Back-End-Probleme."
      )
    ).toBe(true);
  });

  test("Test für Frage_key nicht gefunden", () =>
    expect(() => {
      isRightSolutionForQuestion("frage_6", "No such question");
    }).toThrow(ReferenceError));
});

test("Test für ungleich/nicht String Antworten", () => {
  expect(() => {
    isRightSolutionForQuestion("frage_1", 88);
  }).toThrow(TypeError);
});

// Zur Aufgabe 2.4: Beschreibung Test cases |100% Line Coverage
//     Testfälle :
//  -  Testfall für richtige Antwort
//  -  Testfall für falsche Antwort
//  -  Testfall für fehlende Fragen-Key - ReferenceError
//  -  Testfall für Nicht-String-Antwort - TypeError
