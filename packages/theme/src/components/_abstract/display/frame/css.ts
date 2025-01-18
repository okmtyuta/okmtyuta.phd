import { prefixedBy } from "@src/prefixedBy"
import { composeStyleSource } from "@src/style-source"

const _prefixed = prefixedBy("frame")

const classes = {
	frame: _prefixed(),
}

const style = /* css */ `
.${classes.frame} {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
}
`

export const frame = composeStyleSource(classes, style)
