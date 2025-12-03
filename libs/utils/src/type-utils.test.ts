import { describe, it, expect, expectTypeOf } from "vitest";
import type { Maybe } from "./type-utils";

describe("Maybe type", () => {
  it("should allow null values", () => {
    const value: Maybe<string> = null;
    expect(value).toBeNull();
  });

  it("should allow undefined values", () => {
    const value: Maybe<string> = undefined;
    expect(value).toBeUndefined();
  });

  it("should allow the actual type value", () => {
    const value: Maybe<string> = "hello";
    expect(value).toBe("hello");
  });

  it("should work with different types", () => {
    const stringMaybe: Maybe<string> = "test";
    const numberMaybe: Maybe<number> = 42;
    const objectMaybe: Maybe<{ id: number }> = { id: 1 };

    expect(stringMaybe).toBe("test");
    expect(numberMaybe).toBe(42);
    expect(objectMaybe).toEqual({ id: 1 });
  });

  it("should properly type-check at compile time", () => {
    type TestMaybe = Maybe<string>;
    expectTypeOf<TestMaybe>().toMatchTypeOf<string | null | undefined>();
  });

  it("should work with arrays", () => {
    const arrayMaybe: Maybe<string[]> = ["a", "b", "c"];
    const nullArrayMaybe: Maybe<string[]> = null;

    expect(arrayMaybe).toEqual(["a", "b", "c"]);
    expect(nullArrayMaybe).toBeNull();
  });

  it("should work in function return types", () => {
    function findValue(shouldReturn: boolean): Maybe<number> {
      return shouldReturn ? 42 : null;
    }

    expect(findValue(true)).toBe(42);
    expect(findValue(false)).toBeNull();
  });

  it("should work with type guards", () => {
    function processValue(value: Maybe<string>): string {
      if (value === null || value === undefined) {
        return "no value";
      }
      return value.toUpperCase();
    }

    expect(processValue("hello")).toBe("HELLO");
    expect(processValue(null)).toBe("no value");
    expect(processValue(undefined)).toBe("no value");
  });
});
