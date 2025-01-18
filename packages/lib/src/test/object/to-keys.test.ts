import { expect, test, describe } from "vitest"
import { toKeys } from "../../object"

describe("Hex class", () => {
	test("", () => {
		const source = {
			key1: 1,
			key2: 2,
			key3: 3,
		}

		expect(toKeys(source)).toEqual(["key1", "key2", "key3"])
	})
})
