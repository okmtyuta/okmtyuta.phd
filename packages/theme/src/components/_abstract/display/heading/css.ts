import { prefixedBy } from '@src/prefixedBy'
import {
  responsiveFontSize,
  fontWeight
} from '@okmtyuta/packages.lib.okmtyuta.phd'
import { composeStyleSource } from '@src/style-source'

const _prefixed = prefixedBy('heading')

const classes = {
  heading: _prefixed(),
  h1: _prefixed('h1'),
  h2: _prefixed('h2'),
  h3: _prefixed('h3'),
  h4: _prefixed('h4'),
  h5: _prefixed('h5'),
  h6: _prefixed('h6')
}
const property = {
  margin: {
    h1: { top: 64, bottom: 24 },
    h2: { top: 64, bottom: 24 },
    h3: { top: 40, bottom: 24 },
    h4: { top: 40, bottom: 16 },
    h5: { top: 40, bottom: 16 },
    h6: { top: 24, bottom: 16 }
  }
}

const styles = /* css */ `
.${classes.heading}.${classes.h1} {
  margin-top: ${property.margin.h1.top}px;
  margin-bottom: ${property.margin.h1.bottom}px;
  ${responsiveFontSize('h1')}
  font-weight: ${fontWeight.h1};
}
.${classes.heading}.${classes.h2} {
  margin-top: ${property.margin.h2.top}px;
  margin-bottom: ${property.margin.h2.bottom}px;
  ${responsiveFontSize('h2')}
  font-weight:  ${fontWeight.h2};
}
.${classes.heading}.${classes.h3} {
  margin-top: ${property.margin.h3.top}px;
  margin-bottom: ${property.margin.h3.bottom}px;
  ${responsiveFontSize('h3')}
  font-weight:  ${fontWeight.h3};
}
.${classes.heading}.${classes.h4} {
  margin-top: ${property.margin.h4.top}px;
  margin-bottom: ${property.margin.h4.bottom}px;
  ${responsiveFontSize('h4')}
  font-weight:  ${fontWeight.h4};
}
.${classes.heading}.${classes.h5} {
  margin-top: ${property.margin.h5.top}px;
  margin-bottom: ${property.margin.h5.bottom}px;
  ${responsiveFontSize('h5')}
  font-weight:  ${fontWeight.h5};
}
.${classes.heading}.${classes.h6} {
  margin-top: ${property.margin.h6.top}px;
  margin-bottom: ${property.margin.h6.bottom}px;
  ${responsiveFontSize('h6')}
  font-weight:  ${fontWeight.h6};
}
`

export const heading = composeStyleSource(classes, styles)
