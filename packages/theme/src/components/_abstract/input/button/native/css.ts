import {
  Color,
  color,
  colors,
  fromEntries,
  Hex,
  toEntries
} from '@okmtyuta/packages.lib.okmtyuta.phd'
import { prefixedBy } from '@src/prefixedBy'
import { composeStyleSource } from '@src/style-source'

const _prefixed = prefixedBy('native-button')

const baseClasses = {
  nativeButton: _prefixed(),
  standard: _prefixed('standard'),
  filled: _prefixed('filled'),
  outlined: _prefixed('outlined')
} as const

const colorEntries: [Color, string][] = colors.map((color) => [
  color,
  _prefixed(color)
])
const colorClasses = fromEntries(colorEntries)

const classes = {
  ...baseClasses,
  ...colorClasses
}

const baseStyle = /* css */ `
.${classes.nativeButton} {
  height: 48px;
  outline: none;
  position: relative;
  overflow: hidden;
  padding: 12px 20px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.${classes.nativeButton}:disabled {
  color: ${new Hex(color.neutral).darken(0.95).hexString};
  background-color: ${new Hex(color.neutral).lighten(0.9).hexString};
  border: solid 1px ${new Hex(color.neutral).lighten(0.9).hexString};
  cursor: not-allowed;
}

`
// const sizeVariations = () => {
//   const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'auto']
//   const _sizeVariations: string[] = []

//   for (const size of sizes) {
//     _sizeVariations.push(/* css */ `
//     .${filledButtonPrefixed(size)} {
//       width: var(--AMUI-button-size-${size})
//     }
//     `)
//   }
//   return _sizeVariations
// }

const colorStyle = toEntries(color)
  .map(([key, code]) => {
    const hex = new Hex(code)

    const colorClass = classes[key]

    if (!colorClass) {
      return ''
    }

    const style = /* css */ `
    .${classes.nativeButton}.${classes.filled}.${colorClass}:not(:disabled) {
      border: none;
      color: white;
      background-color: ${hex.hexString};
    }
    .${classes.nativeButton}.${
      classes.filled
    }.${colorClass}:not(:disabled):hover {
      background-color: ${hex.lighten(0.1).hexString};
    }

    .${classes.nativeButton}.${classes.outlined}.${colorClass}:not(:disabled) {
      color: ${hex.hexString};
      border: ${hex.hexString} solid 1px;
      background-color: inherit;
    }
    .${classes.nativeButton}.${
      classes.outlined
    }.${colorClass}:not(:disabled):hover {
      background-color: ${hex.lighten(0.95).hexString};
    }

    .${classes.nativeButton}.${classes.standard}.${colorClass}:not(:disabled) {
      border: none;
      color: ${hex.hexString};
      background-color: transparent;
    }
    .${classes.nativeButton}.${
      classes.standard
    }.${colorClass}:not(:disabled):hover {
      background-color: ${hex.lighten(0.95).hexString};
    }
    `
    return style
  })
  .join(' ')

const style = [baseStyle, colorStyle].join(' ')
export const nativeButton = composeStyleSource(classes, style)
