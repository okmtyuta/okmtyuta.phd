import { expect, test, describe } from 'vitest'
import { fromEntries } from '../../object'

describe('Hex class', () => {
  test('', () => {
    const source: [string, number][] = [
      ['key1', 1],
      ['key2', 2],
      ['key3', 3]
    ]

    expect(fromEntries(source)).toEqual({
      key1: 1,
      key2: 2,
      key3: 3
    })
  })
})
