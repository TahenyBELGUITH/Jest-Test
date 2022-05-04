import stringLength from "./stringLength.js";

test("count of stings of (Hello)", () => {
  expect(stringLength("Mo")).toBe(2);
  expect(stringLength("Hello")).toBe(5);
  expect(stringLength("Hi")).toBe(2);
  expect(stringLength("Bye")).toBe(3);
  expect(() =>stringLength("TestTestTestTestTestTest")).toThrow(Error);
});
