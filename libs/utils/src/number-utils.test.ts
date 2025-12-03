import { describe, it, expect } from "vitest";
import {
  isNumberInRange,
  roundToDecimalPlaces,
  formatAsCurrency,
} from "./number-utils";

describe("isNumberInRange", () => {
  it("should return true when number is within range", () => {
    expect(isNumberInRange(5, 1, 10)).toBe(true);
    expect(isNumberInRange(50, 0, 100)).toBe(true);
    expect(isNumberInRange(0, -10, 10)).toBe(true);
  });

  it("should return true when number equals min or max", () => {
    expect(isNumberInRange(1, 1, 10)).toBe(true);
    expect(isNumberInRange(10, 1, 10)).toBe(true);
  });

  it("should return false when number is outside range", () => {
    expect(isNumberInRange(11, 1, 10)).toBe(false);
    expect(isNumberInRange(0, 1, 10)).toBe(false);
    expect(isNumberInRange(-5, 0, 10)).toBe(false);
  });

  it("should handle negative ranges", () => {
    expect(isNumberInRange(-5, -10, -1)).toBe(true);
    expect(isNumberInRange(-11, -10, -1)).toBe(false);
  });

  it("should handle decimal numbers", () => {
    expect(isNumberInRange(5.5, 5, 6)).toBe(true);
    expect(isNumberInRange(4.9, 5, 6)).toBe(false);
  });
});

describe("roundToDecimalPlaces", () => {
  it("should round to specified decimal places", () => {
    expect(roundToDecimalPlaces(3.14159, 2)).toBe(3.14);
    expect(roundToDecimalPlaces(3.14159, 3)).toBe(3.142);
    expect(roundToDecimalPlaces(3.14159, 0)).toBe(3);
  });

  it("should handle rounding up", () => {
    expect(roundToDecimalPlaces(3.456, 1)).toBe(3.5);
    expect(roundToDecimalPlaces(3.456, 2)).toBe(3.46);
  });

  it("should handle rounding down", () => {
    expect(roundToDecimalPlaces(3.444, 1)).toBe(3.4);
    expect(roundToDecimalPlaces(3.444, 2)).toBe(3.44);
  });

  it("should handle negative numbers", () => {
    expect(roundToDecimalPlaces(-3.456, 2)).toBe(-3.46);
    expect(roundToDecimalPlaces(-3.444, 2)).toBe(-3.44);
  });

  it("should handle whole numbers", () => {
    expect(roundToDecimalPlaces(5, 2)).toBe(5);
    expect(roundToDecimalPlaces(10, 0)).toBe(10);
  });
});

describe("formatAsCurrency", () => {
  it("should format number as USD currency by default", () => {
    const result = formatAsCurrency(1234.56);
    expect(result).toMatch(/\$1,234\.56/);
  });

  it("should format number as specified currency", () => {
    const result = formatAsCurrency(1234.56, "EUR", "de-DE");
    expect(result).toMatch(/1\.234,56.*€/);
  });

  it("should handle whole numbers", () => {
    const result = formatAsCurrency(100);
    expect(result).toMatch(/\$100\.00/);
  });

  it("should handle zero", () => {
    const result = formatAsCurrency(0);
    expect(result).toMatch(/\$0\.00/);
  });

  it("should handle negative numbers", () => {
    const result = formatAsCurrency(-50.25);
    expect(result).toMatch(/-?\$50\.25/);
  });

  it("should handle large numbers", () => {
    const result = formatAsCurrency(1234567.89);
    expect(result).toMatch(/\$1,234,567\.89/);
  });

  it("should format with different locales", () => {
    const usdResult = formatAsCurrency(1000, "USD", "en-US");
    const eurResult = formatAsCurrency(1000, "EUR", "en-US");
    expect(usdResult).toMatch(/\$1,000\.00/);
    expect(eurResult).toMatch(/€1,000\.00/);
  });
});
