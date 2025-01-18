import { prefixedBy } from '@src/prefixedBy'
import { expect, test, describe } from 'vitest'

describe('prefixedBy', () => {
  test('prefixedBy(prefix) -> { (name) -> AMUI-component-prefix_name }', () => {
    const _prefixed = prefixedBy('prefix')
    expect(_prefixed()).toBe('AMUI-component-prefix_')
    expect(_prefixed('name')).toBe('AMUI-component-prefix_name')
  })
})
