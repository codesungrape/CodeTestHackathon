import { describe, test, expect } from "vitest";
import removeVowels from "./main";

describe("removeVowels()", () => {
  test("Checks empty input and returns ERROR message: 'There is nothing to remove!'", () => {
    const input = "";
    const actual = removeVowels(input);
    const expected = "There is nothing to remove!";
    expect(actual).toBe(expected);
  });
  test("Checks type of output to be string", () => {
    const input = "";
    const actual = removeVowels(input);
    expect(typeof actual).toBe("string");
  });
  // Test section below tests simple strings
  test.each([
    ["John Mcclane", "Jhn Mccln"],
    ["Hello, world!", "Hll, wrld!"],
    ["Code is fun!", "Cd s fn!"],
    ["I am learning to code!", " m lrnng t cd!"],
  ])("removeVowels(%s) -> %s", (input, expected) => {
    expect(removeVowels(input)).toBe(expected);
  });
  test("testing complex string", () => {
    const input = "I enjoy solving coding challenges daily.";
    const actual = removeVowels(input);
    const expected = " njy slvng cdng chllngs dly.";
    expect(actual).toBe(expected);
  });
  test("Checking case-sensitivity and insensitivity", () => {
    const input = "AEIOU are vowels.";
    const actual = removeVowels(input);
    const expected = " r vwls.";
    expect(actual).toBe(expected);
  });
  test("Checking it preserves spaces and punctuation", () => {
    const input = "Unit test   ing is   easy with     Vitest    !";
    const actual = removeVowels(input);
    const expected = "nt tst   ng s   sy wth     Vtst    !";
    expect(actual).toBe(expected);
  });
  test("Checking case with no vowels", () => {
    const input = "Th qck brwn fx jmps vr th lzy dg.";
    const actual = removeVowels(input);
    const expected = "Th qck brwn fx jmps vr th lzy dg.";
    expect(actual).toBe(expected);
  });
  test("Checking case with MIXED case vowels", () => {
    const input = "UsE PlAywRiGHt fOr Api TesTinG!";
    const actual = removeVowels(input);
    const expected = "s PlywRGHt fr p TsTnG!";
    expect(actual).toBe(expected);
  });
});
