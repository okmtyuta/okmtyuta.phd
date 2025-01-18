import { Hex, color } from '@okmtyuta/packages.lib.okmtyuta.phd'
import { prefixedBy } from '@src/prefixedBy'
import { composeStyleSource } from '@src/style-source'

const _prefixed = prefixedBy('list-item')

const classes = {
  listItem: _prefixed(),
  marker: _prefixed('marker'),
  disc: _prefixed('disc')
}
const property = {
  discColor: new Hex(color.neutral).darken(0.5).hexString
}

const styles = /* css */ `
.${classes.listItem} {
  text-align: -webkit-match-parent;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  line-height: 1.7;
}
.${classes.listItem} .${classes.marker} {
  display: inline-flex;
  width: 24px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 1lh;
}
.${classes.listItem} .${classes.marker} {
  display: inline-flex;
  width: 24px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 1lh;
}
.${classes.listItem} .${classes.marker}::part(svg) {
  height: calc(1lh * 0.3);
  fill: ${property.discColor};
}
.${classes.listItem} .${classes.disc} {
  height: calc(1lh * 0.3);
  fill: ${property.discColor};
}
`

export const listItem = composeStyleSource(classes, styles)
