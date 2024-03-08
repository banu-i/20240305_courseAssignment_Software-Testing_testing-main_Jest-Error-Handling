const { addNumbers, divideNrs } = require("./MyMathFunctions");

describe("Test Basic Math Add Functions", () => {
  test("Basic Add Function to pass with Basic input", () => {
    const result = addNumbers(10, 5);
    console.log("My Result", result);
    expect(result).toBe(15);
  });

  // describe("Test Basic Math Divide Functions", () => {
  test("TypeError bei Division durch Null", () => {
    // const result = divideNrs(10, 0);
    // console.log("MY division result", result);
    expect(() => {
      divideNrs(10, 0);
    }).toThrow(TypeError);
  });
});
