import {
  frame,
  heading,
  link,
  list,
  listItem,
  paragraph,
  typography
} from '../components/_abstract/display'
import { ripple } from '../components/_abstract/effect/ripple'
import { skeleton } from '../components/_abstract/feedback'
import { nativeButton } from '../components/_abstract/input'
import { flex, positional } from '../components/_abstract/layout'

export const styleSourceRecord = {
  // display
  frame,
  heading,
  link,
  list,
  listItem,
  paragraph,
  typography,

  // effect
  ripple,

  // feedback
  skeleton,

  // input
  nativeButton,

  // layout
  flex,
  positional
} as const
