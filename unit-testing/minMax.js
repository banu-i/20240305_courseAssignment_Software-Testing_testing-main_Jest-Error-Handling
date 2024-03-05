// Kursaufgabe 20240304 - Aufgabe 2.1:
// Erstelle eine neue Datei "minMax.js".
// Schreibe in minMax.js folgende Funktionen:
// min(a, b) : gibt den kleineren Wert (also a oder b) zurück
// max(a,b) : gibt den größeren Wert (also a oder b) zurück.
// Überlege dir hierfür selbst eine kleine Logik.
// Du darfst keine fremden Methoden wie Math.min() oder Math.max() nutzen.

function min(a, b) {
  return a < b ? a : b;
}

function max(a, b) {
  return a > b ? a : b;
}

module.exports.min = min;
module.exports.max = max;
