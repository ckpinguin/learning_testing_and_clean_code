import { it, expect, test } from "vitest"
import { validateNotEmpty } from "./validation"

it("should throw an error when an empty string is provided", () => {
  const inputStr = ""
  const validationFn = () => {
    validateNotEmpty(inputStr)
  }
  expect(validationFn).toThrow()
})

it("should throw an error when a string with only blanks is provided", () => {
  const inputStr = "    "
  const validationFn = () => {
    validateNotEmpty(inputStr)
  }
  expect(validationFn).toThrow()
})

it("should throw an error with the provided message when an error is thrown", () => {
  const inputStr = ""
  const testErrorMessage = "Test"
  const validationFn = () => {
    validateNotEmpty(inputStr, testErrorMessage)
  }
  expect(validationFn).toThrow(testErrorMessage)
})

it("should not throw when a non-empty string is provided", () => {
  const inputStr = "Test"
  const validationFn = () => {
    validateNotEmpty(inputStr)
  }
  expect(validationFn).not.toThrow()
})
