import { prefixedBy } from "@src/prefixedBy"
import { composeStyleSource } from "@src/style-source"

const _prefixed = prefixedBy("flex")

const classes = {
	flex: _prefixed(),
	inline: _prefixed("inline"),
	wrap: _prefixed("wrap"),
	direction: {
		row: _prefixed("row"),
		column: _prefixed("column"),
		"row-reverse": _prefixed("row-reverse"),
		"column-reverse": _prefixed("column-reverse"),
	},
	alignContent: {
		normal: _prefixed("align-content-normal"),
		center: _prefixed("align-content-center"),
		"flex-start": _prefixed("align-content-flex-start"),
		"flex-end": _prefixed("align-content-flex-end"),
		"space-around": _prefixed("align-content-space-around"),
		"space-between": _prefixed("align-content-space-between"),
		stretch: _prefixed("align-content-stretch"),
	},
	justifyContent: {
		normal: _prefixed("justify-content-normal"),
		center: _prefixed("justify-content-center"),
		"flex-start": _prefixed("justify-content-flex-start"),
		"flex-end": _prefixed("justify-content-flex-end"),
		"space-around": _prefixed("justify-content-space-around"),
		"space-between": _prefixed("justify-content-space-between"),
		"space-evenly": _prefixed("justify-content-space-evenly"),
	},
	alignItems: {
		normal: _prefixed("align-items-normal"),
		center: _prefixed("align-items-center"),
		"flex-start": _prefixed("align-items-flex-start"),
		"flex-end": _prefixed("align-items-flex-end"),
		stretch: _prefixed("align-items-stretch"),
		baseline: _prefixed("align-items-baseline"),
	},
}

const styles = /* css */ `
.${classes.flex}:not(.${classes.inline}) {
  display: flex;
}
.${classes.flex}.${classes.inline} {
  display: inline-flex;
}

.${classes.flex}.${classes.direction["row"]} {
  flex-direction: row;
}
.${classes.flex}.${classes.direction["column"]} {
  flex-direction: column;
}
.${classes.flex}.${classes.direction["row-reverse"]} {
  flex-direction: row-reverse;
}
.${classes.flex}.${classes.direction["column-reverse"]} {
  flex-direction: column-reverse;
}

.${classes.flex}.${classes.wrap} {
  flex-wrap: wrap;
}

.${classes.flex}.${classes.alignContent["normal"]} {
  align-content: normal;
}
.${classes.flex}.${classes.alignContent["flex-start"]} {
  align-content: flex-start;
}
.${classes.flex}.${classes.alignContent["flex-end"]} {
  align-content: flex-end;
}
.${classes.flex}.${classes.alignContent["space-around"]} {
  align-content: space-around;
}
.${classes.flex}.${classes.alignContent["space-between"]} {
  align-content: space-between;
}
.${classes.flex}.${classes.alignContent["stretch"]} {
  align-content: stretch;
}

.${classes.flex}.${classes.justifyContent["normal"]} {
  justify-content: normal;
}
.${classes.flex}.${classes.justifyContent["flex-start"]} {
  justify-content: flex-start;
}
.${classes.flex}.${classes.justifyContent["flex-end"]} {
  justify-content: flex-end;
}
.${classes.flex}.${classes.justifyContent["space-around"]} {
  justify-content: space-around;
}
.${classes.flex}.${classes.justifyContent["space-between"]} {
  justify-content: space-between;
}
.${classes.flex}.${classes.justifyContent["space-between"]} {
  justify-content: space-evenly;
}

.${classes.flex}.${classes.alignItems["normal"]} {
  align-items: normal;
}
.${classes.flex}.${classes.alignItems["center"]} {
  align-items: center;
}
.${classes.flex}.${classes.alignItems["flex-start"]} {
  align-items: flex-start;
}
.${classes.flex}.${classes.alignItems["flex-end"]} {
  align-items: flex-end;
}
.${classes.flex}.${classes.alignItems["stretch"]} {
  align-items: stretch;
}
.${classes.flex}.${classes.alignItems["baseline"]} {
  align-items: baseline;
}
`

export const flex = composeStyleSource(classes, styles)
