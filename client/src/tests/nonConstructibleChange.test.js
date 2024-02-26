import { describe, expect, test } from "vitest";

import nonConstructibleChange from "../functions/nonConstructibleChange";

describe("Non-Constructible Change", () => {
  test("It must be a function.", () => {
    expect(typeof nonConstructibleChange).toStrictEqual("function");
  });
  test("The function receives an array of coins and must return the minimum amount of change.", () => {
    expect(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toStrictEqual(20);
    expect(nonConstructibleChange([1, 2, 5])).toStrictEqual(4);
  });
  test("If you do not receive coins, the minimum amount of change you cannot create is 1.", () => {
    expect(nonConstructibleChange([])).toStrictEqual(1);
  });
});
