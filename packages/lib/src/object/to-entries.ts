export const toEntries = <T extends Record<string, any>>(
  record: T
): [keyof T, T[keyof T]][] => {
  return Object.entries(record)
}
