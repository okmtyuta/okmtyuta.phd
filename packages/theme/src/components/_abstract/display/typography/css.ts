import {
	color,
	type Color,
	colors,
	responsiveFontSize,
	fontSizeTypes,
	fromEntries,
	toEntries,
	type FontWeightType,
	fontWeightTypes,
	fontWeight,
} from "@okmtyuta/packages.lib.okmtyuta.phd"
import { prefixedBy } from "@src/prefixedBy"
import { composeStyleSource } from "@src/style-source"
import type { FontSizeType } from "node_modules/@okmtyuta/packages.lib.okmtyuta.phd/dist/types/theme/font/font-size"

const _prefixed = prefixedBy("typography")

const baseClasses = {
	typography: _prefixed(),
} as const

const colorEntries: [Color, string][] = colors.map((color) => [
	color,
	_prefixed(color),
])
const colorClasses = fromEntries(colorEntries)

const fontSizeEntries: [FontSizeType, string][] = fontSizeTypes.map(
	(fontSizeType) => {
		return [fontSizeType, _prefixed("font-size", fontSizeType)]
	},
)
const fontSizeClasses = fromEntries(fontSizeEntries)

const fontWeightEntries: [FontWeightType, string][] = fontWeightTypes.map(
	(fontWeightType) => {
		return [fontWeightType, _prefixed("font-weight", fontWeightType)]
	},
)
const fontWeightClasses = fromEntries(fontWeightEntries)

const classes = {
	...baseClasses,
	...colorClasses,
	size: fontSizeClasses,
	weight: fontWeightClasses,
}

const baseStyle = /* css */ ""

const colorStyle = toEntries(color)
	.map(([key, code]) => {
		const colorClass = classes[key]

		if (!colorClass) {
			return ""
		}

		const style = /* css */ `
    .${classes.typography}.${colorClass} {
      color: ${code};
    }
    `
		return style
	})
	.join(" ")

const fontSizeStyle = fontSizeTypes
	.map((fontSizeType) => {
		const style = /* css */ `
    .${classes.typography}.${classes.size[fontSizeType]} {
      ${responsiveFontSize(fontSizeType)}
    }
  `

		return style
	})
	.join(" ")

const fontWeightStyle = fontWeightTypes
	.map((fontWeightType) => {
		const style = /* css */ `
    .${classes.typography}.${classes.weight[fontWeightType]} {
      font-weight: ${fontWeight[fontWeightType]};
    }
  `

		return style
	})
	.join(" ")

const style = [baseStyle, colorStyle, fontSizeStyle, fontWeightStyle].join(" ")
export const typography = composeStyleSource(classes, style)
