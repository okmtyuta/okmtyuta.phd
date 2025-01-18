import { NotHexStringError } from './error/NotHexStringError'
import { isHexString } from './guards/isHexString'
import { HexString } from './types/HexString'
import { RGBArray } from './types/RGBArray'
import { RGB } from './RGB'

/**
 * Class for handling hexadecimal color code
 */
export class Hex {
  private _hexString: HexString
  private _rgbArray: RGBArray

  constructor(hexString: string) {
    if (!isHexString(hexString)) {
      throw new NotHexStringError(`${hexString} is not a hex string.`)
    }
    this._hexString = hexString
    this._rgbArray = this.toRGBArray()
  }

  toRGBArray(): RGBArray {
    const red = parseInt(this._hexString.slice(1, 3), 16)
    const green = parseInt(this._hexString.slice(3, 5), 16)
    const blue = parseInt(this._hexString.slice(5, 7), 16)

    return [red, green, blue]
  }

  get hexString(): HexString {
    return this._hexString
  }
  get rgbArray(): RGBArray {
    return this._rgbArray
  }

  darken(amount: number) {
    const rgb = new RGB(this._rgbArray)
    const hex = rgb.darken(amount)
    return new Hex(hex.hexString)
  }
  lighten(amount: number) {
    const rgb = new RGB(this._rgbArray)
    const hex = rgb.lighten(amount)
    return new Hex(hex.hexString)
  }
  saturated(amount: number) {
    const rgb = new RGB(this._rgbArray)
    const hex = rgb.saturated(amount)
    return new Hex(hex.hexString)
  }
}
