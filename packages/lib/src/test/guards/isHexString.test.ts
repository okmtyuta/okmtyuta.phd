import { expect, test, describe } from 'vitest'

import { isHexString } from '../../theme/color/guards/isHexString'

type Property = {
  source: unknown
  expected: boolean
}

const properties: Property[] = [
  { source: '#000000', expected: true },
  { source: '#ffffff', expected: true },
  { source: '000000', expected: false },
  { source: 'ffffff', expected: false },
  { source: '#000', expected: false },
  { source: '#fff', expected: false },
  { source: '#00000h', expected: false }
]

describe('isHexString', () => {
  test.each(properties)(
    'isHexString($source) -> $expected',
    ({ source, expected }) => {
      expect(isHexString(source)).toBe(expected)
    }
  )
})
