import { describe, it, expect } from "vitest";
import { capitalizeFirstLetter, truncateString } from "./string-utils";

describe("capitalizeFirstLetter", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
    expect(capitalizeFirstLetter("world")).toBe("World");
  });

  it("should handle empty strings", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should handle single character strings", () => {
    expect(capitalizeFirstLetter("a")).toBe("A");
    expect(capitalizeFirstLetter("Z")).toBe("Z");
  });

  it("should only capitalize the first letter", () => {
    expect(capitalizeFirstLetter("hello world")).toBe("Hello world");
    expect(capitalizeFirstLetter("HELLO")).toBe("HELLO");
  });

  it("should handle strings starting with non-letters", () => {
    expect(capitalizeFirstLetter("123abc")).toBe("123abc");
    expect(capitalizeFirstLetter(" hello")).toBe(" hello");
  });
});

describe("truncateString", () => {
  it("should truncate string when it exceeds maxLength", () => {
    expect(truncateString("hello world", 5)).toBe("hello...");
    expect(truncateString("this is a long string", 10)).toBe("this is a ...");
  });

  it("should not truncate string when it is shorter than maxLength", () => {
    expect(truncateString("hello", 10)).toBe("hello");
    expect(truncateString("short", 5)).toBe("short");
  });

  it("should not truncate string when it equals maxLength", () => {
    expect(truncateString("exact", 5)).toBe("exact");
  });

  it("should handle empty strings", () => {
    expect(truncateString("", 5)).toBe("");
  });

  it("should handle maxLength of 0", () => {
    expect(truncateString("hello", 0)).toBe("...");
  });

  it("should handle maxLength of 1", () => {
    expect(truncateString("hello", 1)).toBe("h...");
  });
});
