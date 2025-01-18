export type StyleSource<Classes> = {
  style: string
  classes: Classes
}
export const composeStyleSource = <T>(
  classes: T,
  style: string
): StyleSource<T> => {
  return { classes, style }
}
