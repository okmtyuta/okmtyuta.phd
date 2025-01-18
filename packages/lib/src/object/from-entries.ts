export const fromEntries = <Key extends string | number | symbol, Value>(
  entries: [Key, Value][]
): Record<Key, Value> => {
  const object = Object.fromEntries(entries) as Record<Key, Value>
  return object
}
