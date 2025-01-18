import { prefixedBy } from "@src/prefixedBy"
import { composeStyleSource } from "@src/style-source"

const _prefixed = prefixedBy("link")

const classes = {
	link: _prefixed(),
	underline: {
		always: _prefixed("always"),
		hover: _prefixed("hover"),
	},
}

const style = /* css */ `
.${classes.link}.${classes.underline.always} {
  text-decoration: underline;
}
.${classes.link}.${classes.underline.hover}:hover {
  text-decoration: underline;
}
`

export const link = composeStyleSource(classes, style)
