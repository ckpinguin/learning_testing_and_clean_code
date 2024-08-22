import { it, expect, describe } from "vitest"
import { cleanNumbers, transformToNumber } from "./numbers"

describe("transformToNumber()", () => {
  it("should make a number out of a string number", () => {
    const arg = "1"

    const result = transformToNumber(arg)

    expect(result).toBeTypeOf("number")
    // Test this too, because NaN as also of type number
    expect(result).toBe(1)
    // more generic:
    expect(result).toBe(+arg)
  })

  it("should yield NaN for a non-transformable value", () => {
    const input = "one!"
    const input2 = {}

    const result = transformToNumber(input)
    const result2 = transformToNumber(input2)

    expect(result).toBeNaN()
    expect(result2).toBeNaN()
  })
})

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numbers = ["1", "2"]

    const cleanedNumbers = cleanNumbers(numbers)

    expect(cleanedNumbers[0]).toBeTypeOf("number")
    expect(cleanedNumbers).toEqual([1, 2])
  })

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numbers = ["", 1]

    const cleanFn = () => cleanNumbers(numbers)

    expect(cleanFn).toThrow()
  })
})
