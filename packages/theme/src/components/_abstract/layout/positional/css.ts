import { prefixedBy } from "@src/prefixedBy"
import { composeStyleSource } from "@src/style-source"

const _prefixed = prefixedBy("positional")

const classes = {
	positional: _prefixed(),
	static: _prefixed("static"),
	relative: _prefixed("relative"),
	fixed: _prefixed("fixed"),
	absolute: _prefixed("absolute"),
	sticky: _prefixed("sticky"),
}

const style = /* css */ `
.${classes.positional}.${classes.relative} {
  position: relative;
}
.${classes.positional}.${classes.fixed} {
  position: fixed;
}
.${classes.positional}.${classes.absolute} {
  position: absolute;
}
.${classes.positional}.${classes.sticky} {
  position: sticky;
}
`

export const positional = composeStyleSource(classes, style)
