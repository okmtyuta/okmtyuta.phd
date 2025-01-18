import { toKeys } from '../../object'

export const fontWeight = {
  title: 700,
  h1: 700,
  h2: 400,
  h3: 700,
  h4: 700,
  h5: 700,
  h6: 700,
  subtitle1: 400,
  subtitle2: 500,
  body1: 400,
  body2: 400,
  button: 400,
  caption: 400,
  overline: 400
}

export type FontWeightType = keyof typeof fontWeight
export const fontWeightTypes = toKeys(fontWeight)
