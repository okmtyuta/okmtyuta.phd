import { expect, test, describe } from "vitest"
import { toEntries } from "../../object"

describe("Hex class", () => {
	test("", () => {
		const source = {
			key1: 1,
			key2: 2,
			key3: 3,
		}

		expect(toEntries(source)).toEqual([
			["key1", 1],
			["key2", 2],
			["key3", 3],
		])
	})
})
