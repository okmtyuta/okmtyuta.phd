import { expect, test, describe } from "vitest"

import { isRGBArray } from "../../theme/color/guards/isRGBArray"

type Property = {
	source: unknown
	expected: boolean
}

const properties: Property[] = [
	{ source: [0, 0, 0], expected: true },
	{ source: [255, 255, 255], expected: true },
	{ source: [], expected: false },
	{ source: [0], expected: false },
	{ source: [0, 0], expected: false },
	{ source: [0, 0, 0, 0], expected: false },
	{ source: [500, 0, 0], expected: false },
]

describe("isRGBArray", () => {
	test.each(properties)(
		"isRGBArray($source) -> $expected",
		({ source, expected }) => {
			expect(isRGBArray(source)).toBe(expected)
		},
	)
})
