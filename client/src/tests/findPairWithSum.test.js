import { describe, expect, test } from "vitest";

import findPairWithSum from "../functions/findPairWithSum";

describe("Two Number Sum", () => {
  test("It must be a function.", () => {
    expect(typeof findPairWithSum).toStrictEqual("function");
  });
  test("It should return a pair of numbers in the array that add up to the target sum.", () => {
    expect(findPairWithSum([2, 7, 11, 15], 9)).toStrictEqual([2, 7]);
  });
  test("If such a pair does not exist, it should return an empty array.", () => {
    expect(findPairWithSum([3, 6, 8, 10], 15)).toStrictEqual([]);
  });
});
