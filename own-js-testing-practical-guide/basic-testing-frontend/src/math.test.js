import { it, expect } from "vitest"
import { add } from "./math"

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3]
  const expectedResult = numbers.reduce((prev, cur) => prev + cur, 0)

  // Act
  const result = add(numbers)

  // Assert
  expect(result).toBe(expectedResult)
})

it("should yield NaN if at least one invalid number is provided", () => {
  const numbers = ["invalid", 2]

  const result = add(numbers)

  expect(result).toBeNaN()
})

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"]
  const expectedResult = numbers.reduce((prev, cur) => +prev + +cur, 0)

  const result = add(numbers)

  expect(result).toBe(expectedResult)
})

it("should yield 0 if an empty array is provided", () => {
  const numbers = []

  const result = add(numbers)

  expect(result).toBe(0)
})

it("should throw an error if no argument is passed to the function", () => {
  const resultFn = () => {
    add()
  }
  expect(resultFn).toThrow(/is not iterable/i)
})

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1
  const num2 = 2
  const resultFn = () => {
    add(num1, num2)
  }

  expect(resultFn).toThrow(/is not iterable/i)
})
