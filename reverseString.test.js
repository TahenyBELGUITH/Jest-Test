import reverseString from "./reverseString.js";

test("reverse", () => {
  expect(reverseString("M")).toBe("M");
  expect(reverseString("Hello")).toBe("olleH");
  expect(reverseString("Hi")).toBe("iH");
  expect(reverseString("Bye")).toBe("eyB");
});
