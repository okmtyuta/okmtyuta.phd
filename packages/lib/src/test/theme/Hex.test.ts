import { expect, test, describe } from "vitest"

import type { RGBArray } from "../../theme/color/types/RGBArray"
import type { HexString } from "../../theme/color/types/HexString"
import { Hex } from "../../theme/color"

type Property = {
	name: string
	rgbArray: RGBArray
	hexString: HexString

	lighten: {
		amount: number
		rgbArray: RGBArray
		hexString: HexString
	}[]

	darken: {
		amount: number
		rgbArray: RGBArray
		hexString: HexString
	}[]
}

const properties: Property[] = [
	{
		name: "black",
		rgbArray: [0, 0, 0],
		hexString: "#000000",
		lighten: [{ amount: 0.1, rgbArray: [25, 25, 25], hexString: "#191919" }],
		darken: [{ amount: 0.1, rgbArray: [0, 0, 0], hexString: "#000000" }],
	},
	{
		name: "white",
		rgbArray: [255, 255, 255],
		hexString: "#ffffff",
		lighten: [{ amount: 0.1, rgbArray: [255, 255, 255], hexString: "#ffffff" }],
		darken: [{ amount: 0.1, rgbArray: [229, 229, 229], hexString: "#e5e5e5" }],
	},
	{
		name: "red",
		rgbArray: [255, 0, 0],
		hexString: "#ff0000",
		lighten: [{ amount: 0.1, rgbArray: [255, 25, 25], hexString: "#ff1919" }],
		darken: [{ amount: 0.1, rgbArray: [229, 0, 0], hexString: "#e50000" }],
	},
	{
		name: "green",
		rgbArray: [0, 255, 0],
		hexString: "#00ff00",
		lighten: [{ amount: 0.1, rgbArray: [25, 255, 25], hexString: "#19ff19" }],
		darken: [{ amount: 0.1, rgbArray: [0, 229, 0], hexString: "#00e500" }],
	},
	{
		name: "blue",
		rgbArray: [0, 0, 255],
		hexString: "#0000ff",
		lighten: [{ amount: 0.1, rgbArray: [25, 25, 255], hexString: "#1919ff" }],
		darken: [{ amount: 0.1, rgbArray: [0, 0, 229], hexString: "#0000e5" }],
	},
	{
		name: "gray",
		rgbArray: [127, 127, 127],
		hexString: "#7f7f7f",
		lighten: [{ amount: 0.1, rgbArray: [139, 139, 139], hexString: "#8b8b8b" }],
		darken: [{ amount: 0.1, rgbArray: [114, 114, 114], hexString: "#727272" }],
	},
]

describe("Hex class", () => {
	test.each(properties)(
		"$name: Hex($hexString).hexString -> $hexString",
		({ hexString }) => {
			const hex = new Hex(hexString)
			expect(hex.hexString).toBe(hexString)
		},
	)

	test.each(properties)(
		"$name: Hex($hexString).rgbArray -> $rgbArray",
		({ rgbArray, hexString }) => {
			const hex = new Hex(hexString)
			expect(hex.rgbArray).toEqual(rgbArray)
		},
	)

	test.each(properties)(
		"$name: Hex($hexString).lighten -> $lighten",
		({ hexString, lighten }) => {
			const hex = new Hex(hexString)

			for (const { amount, rgbArray, hexString } of lighten) {
				expect(hex.lighten(amount).rgbArray).toEqual(rgbArray)
				expect(hex.lighten(amount).hexString).toEqual(hexString)
			}
		},
	)

	test.each(properties)(
		"$name: Hex($hexString).darken -> $darken",
		({ hexString, darken }) => {
			const hex = new Hex(hexString)

			for (const { amount, rgbArray, hexString } of darken) {
				expect(hex.darken(amount).rgbArray).toEqual(rgbArray)
				expect(hex.darken(amount).hexString).toEqual(hexString)
			}
		},
	)
})
