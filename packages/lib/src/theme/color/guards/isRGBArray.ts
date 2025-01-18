import { RGBArray } from '../types/RGBArray'

const isThreeItemsIntegerArray = (
  source: unknown
): source is [number, number, number] => {
  if (!Array.isArray(source)) {
    return false
  }
  if (source.length !== 3) {
    return false
  }

  return source.every((element) => typeof element === 'number')
}

/**
 * Check whether source is RGBArray.
 * @param {unknown} source Target for checking
 * @returns {boolean} Whether source is RGBArray or not.
 */
export const isRGBArray = (source: unknown): source is RGBArray => {
  if (!isThreeItemsIntegerArray(source)) {
    return false
  }

  return source.every((item) => 0 <= item && item <= 255)
}
