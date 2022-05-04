import Calculator from "./calculator.js";

describe("Calculator", () => {
  const calculator = new Calculator(15, 3);
  test("add", () => {
    expect(calculator.add()).toBe(18);
  });

  test("subtract", () => {
    expect(calculator.subtract()).toBe(12);
  });

  test("multiply", () => {
    expect(calculator.multiply()).toBe(45);
  });

  test("divide", () => {
    expect(calculator.divide()).toBe(5);
  });
});
