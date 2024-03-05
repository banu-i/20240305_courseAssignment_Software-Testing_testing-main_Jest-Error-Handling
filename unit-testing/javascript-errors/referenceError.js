// Folgender Code wirft einen ReferenceError

try {
  meineLieblingsFunktion();
} catch (error) {
  console.error("ReferenceError behandelt:", error.message);
} finally {
  console.log(
    "Die Ausführung vom Code wurde versucht, aber ist mit einem Fehler!"
  );
}
