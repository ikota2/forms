import { makeSpaceEveryThreeChar } from "./makeSpaceEveryThreeChar";

test("makeSpaceEveryThreeChar makes a space every 3 chars for 2-digit number", () => {
  expect(makeSpaceEveryThreeChar("10")).toBe("10");
});
test("makeSpaceEveryThreeChar makes a space every 3 chars for 3-digit number", () => {
  expect(makeSpaceEveryThreeChar("100")).toBe("100");
});
test("makeSpaceEveryThreeChar makes a space every 3 chars for 4-digit number", () => {
  expect(makeSpaceEveryThreeChar("1000")).toBe("1 000");
});
test("makeSpaceEveryThreeChar makes a space every 3 chars for 5-digit number", () => {
  expect(makeSpaceEveryThreeChar("10000")).toBe("10 000");
});
test("makeSpaceEveryThreeChar makes a space every 3 chars for 6-digit number", () => {
  expect(makeSpaceEveryThreeChar("100000")).toBe("100 000");
});
