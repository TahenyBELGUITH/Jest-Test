import stringLength from "./stringLength.js";

test("count of stings of (Hello)", () => {
  expect(stringLength("M")).toBe(1);
  expect(stringLength("Hello")).toBe(5);
  expect(stringLength("Hi")).toBe(2);
  expect(stringLength("Bye")).toBe(3);
});
