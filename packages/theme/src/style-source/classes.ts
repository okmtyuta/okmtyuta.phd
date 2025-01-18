import { fromEntries, toEntries } from '@okmtyuta/packages.lib.okmtyuta.phd'
import { styleSourceRecord } from './style-source-record'

export const classesRecord = fromEntries(
  toEntries(styleSourceRecord).map(([name, source]) => [name, source.classes])
)
