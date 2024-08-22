import { vi, it, expect } from "vitest"
import writeData from "./io"
import { promises as fs } from "fs"
import path from "path"

vi.mock("fs")
vi.mock("path")

it("should execute the writeFile method", () => {
  const testData = "test"
  const testFilename = "test.txt"

  writeData(testData, testFilename)

  expect(fs.writeFile).toBeCalled()
})

it("should execute the writeFile method with the right arguments", () => {
  const testData = "test"
  const testFilename = "test.txt"

  writeData(testData, testFilename)
  expect(fs.writeFile).toBeCalledWith(testFilename, testData)
})
