import capitalize from "./capitalize.js";

test("Capitalize string", () => {
  expect(capitalize("hello")).toBe("Hello");
});