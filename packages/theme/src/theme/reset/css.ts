import { composeStyleSource } from "@src/style-source"

const style = /* css */ `
*:where(
  :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)
) {
all: unset;
display: revert;
}

*,
*::before,
*::after {
box-sizing: border-box;
}

html {
-moz-text-size-adjust: none;
-webkit-text-size-adjust: none;
text-size-adjust: none;
}

:where(body) {
line-height: 1.5;
font-family: system-ui, sans-serif;
-webkit-font-smoothing: antialiased;
}

a,
button {
cursor: revert;
}

ol,
ul,
menu {
list-style: none;
}

img {
max-inline-size: 100%;
max-block-size: 100%;
}

table {
border-collapse: collapse;
}

input,
textarea {
-webkit-user-select: auto;
}

textarea {
white-space: revert;
}

meter {
-webkit-appearance: revert;
appearance: revert;
}

:where(pre) {
all: revert;
box-sizing: border-box;
}

::placeholder {
color: unset;
}

::marker {
content: initial;
}

:where([hidden]) {
display: none;
}

:where([contenteditable]:not([contenteditable='false'])) {
-moz-user-modify: read-write;
-webkit-user-modify: read-write;
overflow-wrap: break-word;
-webkit-line-break: after-white-space;
-webkit-user-select: auto;
}

:where([draggable='true']) {
-webkit-user-drag: element;
}

:where(dialog:modal) {
all: revert;
box-sizing: border-box;
}

/* default style */

body {
  color: #3c3c3c;
}

h1 {
  margin-top: 64px;
  margin-bottom: 24px; /* mobile */
  @media screen and (max-width: 767px) {
    font-size: 30px;
  } /* tablet */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
  } /* pc */
  @media screen and (min-width: 1025px) {
    font-size: 36px;
  }
  font-weight: 700;
}
h2 {
  margin-top: 64px;
  margin-bottom: 24px; /* mobile */
  @media screen and (max-width: 767px) {
    font-size: 26px;
  } /* tablet */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 26px;
  } /* pc */
  @media screen and (min-width: 1025px) {
    font-size: 30px;
  }
  font-weight: 400;
}
h3 {
  margin-top: 40px;
  margin-bottom: 24px; /* mobile */
  @media screen and (max-width: 767px) {
    font-size: 22px;
  } /* tablet */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 22px;
  } /* pc */
  @media screen and (min-width: 1025px) {
    font-size: 26px;
  }
  font-weight: 700;
}
h4 {
  margin-top: 40px;
  margin-bottom: 16px; /* mobile */
  @media screen and (max-width: 767px) {
    font-size: 20px;
  } /* tablet */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
  } /* pc */
  @media screen and (min-width: 1025px) {
    font-size: 24px;
  }
  font-weight: 700;
}
h5 {
  margin-top: 40px;
  margin-bottom: 16px; /* mobile */
  @media screen and (max-width: 767px) {
    font-size: 18px;
  } /* tablet */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
  } /* pc */
  @media screen and (min-width: 1025px) {
    font-size: 22px;
  }
  font-weight: 700;
}
h6 {
  margin-top: 24px;
  margin-bottom: 16px; /* mobile */
  @media screen and (max-width: 767px) {
    font-size: 16px;
  } /* tablet */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  } /* pc */
  @media screen and (min-width: 1025px) {
    font-size: 18px;
  }
  font-weight: 700;
}

p {
  line-height: 1.7;
  margin-top: 12px;
  margin-bottom: 12px;
}

strong {
  font-weight: bold;
}
em {
  font-style: italic;
}

a {
  text-decoration: underline;
}
a:hover {
  text-decoration: underline;
}

pre {
  padding: 12px;
}

img {
  width: 100%;
  padding: 0 20%;
  height: auto;
}
figcaption {
  text-align: center;
  font-style: italic;
}

blockquote {
  font-style: italic;
  padding-left: 12px;
  border-left: 3px #aaa solid;
  color: #3c3c3c;
}

li {
  position: relative;
  padding-left: 16px;
  margin: 4px 0;
}

li:before {
  content: '';
  position: absolute;
  top: calc(0.5lh - 3px);
  left: 0;
  width: 6px;
  height: 6px;
  background-color: #3c3c3c;
  border-radius: 50%;
}
`

export const reset = composeStyleSource({}, style)
