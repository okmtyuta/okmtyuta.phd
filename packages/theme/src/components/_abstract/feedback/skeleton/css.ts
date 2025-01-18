import { prefixedBy } from '@src/prefixedBy'
import { composeStyleSource } from '@src/style-source'

const _prefixed = prefixedBy('skeleton')

const classes = {
  skeleton: _prefixed(),
  text: _prefixed('text'),
  circle: _prefixed('circle'),
  rectangle: _prefixed('rectangle'),
  rounded: _prefixed('rounded'),
  effect: _prefixed('effect')
}

const style = /* css */ `
@keyframes ${classes.effect} {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

.${classes.skeleton} {
  background-color: rgba(0, 0, 0, 0.11);
  animation: ${classes.effect} 2s ease-in-out 0.5s infinite;
}
.${classes.skeleton}.${classes.text} {
  height: 14px;
  margin: 4px 0;
  border-radius: 2px;
}
.${classes.skeleton}.${classes.circle} {
  width: 32px;
  height: 32px;
  border-radius: 16px;
}
.${classes.skeleton}.${classes.rounded} {
  border-radius: 4px;
}
.${classes.skeleton}.${classes.rectangle} {
  border-radius: 0;
}
`

export const skeleton = composeStyleSource(classes, style)
