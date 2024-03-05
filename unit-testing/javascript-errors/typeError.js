// Folgender Code wirft einen TypeError

try {
  const zahl = 1024;
  zahl.map((item) => {
    console.log(item);
  });
} catch (error) {
  console.error("TypeError behandelt:", error.message);
} finally {
  console.log(
    "Die Ausführung vom Code wurde versucht, aber ist mit einem Fehler!"
  );
}
