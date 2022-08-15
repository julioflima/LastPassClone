import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


/* modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/


/**
Remove the margin in all browsers.
*/
/**
 * Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
 */

 @font-face {
  font-family: "BancoDoBrasilTitulos";
  src: url('/assets/fonts/BancoDoBrasilTitulos-Light.ttf') format('truetype');
  font-weight: 100;
}

@font-face {
  font-family: "BancoDoBrasilTitulos";
  src: url('/assets/fonts/BancoDoBrasilTitulos-Regular.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: "BancoDoBrasilTitulos";
  src: url('/assets/fonts/BancoDoBrasilTitulos-Medium.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: "BancoDoBrasilTitulos";
  src: url('/assets/fonts/BancoDoBrasilTitulos-Bold.ttf') format('truetype');
  font-weight: 600;
}

@font-face {
  font-family: "BancoDoBrasilTextos";
  src: url('/assets/fonts/BancoDoBrasilTextos-Light.ttf') format('truetype');
  font-weight: 100;
}

@font-face {
  font-family: "BancoDoBrasilTextos";
  src: url('/assets/fonts/BancoDoBrasilTextos-Regular.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: "BancoDoBrasilTextos";
  src: url('/assets/fonts/BancoDoBrasilTextos-Medium.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: "BancoDoBrasilTextos";
  src: url('/assets/fonts/BancoDoBrasilTextos-Bold.ttf') format('truetype');
  font-weight: 600;
}

@font-face {
  font-family: "BancoDoBrasilTextos";
  src: url('/assets/fonts/BancoDoBrasilTextos-XBold.ttf') format('truetype');
  font-weight: 800;
}

:root {

  --fonts-titles: 'BancoDoBrasilTitulos',
  Arial,
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Helvetica,
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  sans-serif;

  --fonts-texts: 'BancoDoBrasilTextos',
  Arial,
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Helvetica,
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  sans-serif;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  -webkit-tap-highlight-color:${({ theme }) => theme.colors.tertiary.one}00;
  scrollbar-color: ${({ theme }) => theme.colors.quaternary.two} ${({
  theme,
}) => theme.colors.sevenary.four};
  scrollbar-width: thin;
}

/**
Use a more readable tab size (opinionated).
*/

:root {
  -moz-tab-size: 4;
  tab-size: 4;
}

/**
1. Correct the line height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
*/

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 85.75%;
  }
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/*
Sections
========
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

br{
  line-height: ${({ theme }) => theme.SPACING_ONE};
}

p {
  line-height: 1.5rem;
  font-size:${({ theme }) => theme.SPACING_ONE};
  text-align: justify;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
1. Remove the inheritance of text transform in Firefox.
*/

button,
select {
  /* 1 */
  text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
  padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/**
 * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
 * A thin layer on top of normalize.css that provides a starting point more
 * suitable for web applications.
 */

/**
 * Removes the default spacing and border for appropriate elements.
 */

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

button {
  background-color: transparent;
  background-image: none;
}

/**
 * Work around a Firefox/IE bug where the transparent 'button' background
 * results in a loss of the default 'button' focus styles.
 */

button:focus {
  outline: 0;
  outline: 5px auto -webkit-focus-ring-color;
}

fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/**
 * Tailwind custom reset styles
 */

/**
 * 1. Use the user's configured 'sans' font-family (with Tailwind's default
 *    sans-serif font stack as a fallback) as a sane default.
 * 2. Use Tailwind's default "normal" line-height so the user isn't forced
 *    to override it to ensure consistency even when using the default theme.
 */

html {
  font-family: Arial,
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Helvetica,
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  sans-serif; /* 1 */
  line-height: 1.5; /* 2 */
}

/**
 * Inherit font-family and line-height from 'html' so users can set them as
 * a class directly on the 'html' element.
 */

/**
 * 1. Prevent padding and border from affecting element width.
 *
 *    We used to set this in the html element and inherit from
 *    the parent element for everything else. This caused issues
 *    in shadow-dom-enhanced elements like <details> where the content
 *    is wrapped by a div with box-sizing set to 'content-box'.
 *
 *    https://github.com/mozdevs/cssremedy/issues/4
 *
 *
 * 2. Allow adding a border to an element by just adding a border-width.
 *
 *    By default, the way the browser specifies that an element should have no
 *    border is by setting it's border-style to 'none' in the user-agent
 *    stylesheet.
 *
 *    In order to easily add borders to elements by just setting the 'border-width'
 *    property, we change the default border-style for all elements to 'solid', and
 *    use border-width to hide them instead. This way our 'border' utilities only
 *    need to set the 'border-width' property instead of the entire 'border'
 *    shorthand, making our border utilities much more straightforward to compose.
 *
 *    https://github.com/tailwindcss/tailwindcss/pull/116
 */

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color:${({ theme }) => theme.colors.quaternary.six}; /* 2 */
}

/*
 * Ensure horizontal rules are visible by default
 */

hr {
  border-top-width: 1px;
}

/**
 * Undo the 'border-style: none' reset that Normalize applies to images so that
 * our 'border-{width}' utilities have the expected effect.
 *
 * The Normalize reset is unnecessary for us since we default the border-width
 * to 0 on all elements.
 *
 * https://github.com/tailwindcss/tailwindcss/issues/362
 */

img {
  border-style: solid;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color:${({ theme }) => theme.colors.quaternary.eleven};
  font-size:${({ theme }) => theme.SPACING_ONE};
  font-weight: 300;
  font-family: var(--fonts-texts);
}

button,
[role='button'] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/**
 * Reset links to optimize for opt-in styling instead of
 * opt-out.
 */

a {
  color: inherit;
  text-decoration: inherit;
}

/**
 * Reset form element properties that are easy to forget to
 * style explicitly so you don't inadvertently introduce
 * styles that deviate from your design system. These styles
 * supplement a partial reset that is already applied by
 * normalize.css.
 */

button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

/**
 * Use the configured 'mono' font family for elements that
 * are expected to be rendered with a monospace font, falling
 * back to the system monospace stack if there is no configured
 * 'mono' font family.
 */

pre,
code,
kbd,
samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

/**
 * Make replaced elements 'display: block' by default as that's
 * the behavior you want almost all of the time. Inspired by
 * CSS Remedy, with 'svg' added as well.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

/**
 * Constrain images and videos to the parent width and preserve
 * their intrinsic aspect ratio.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */

img,
video {
  max-width: 100%;
  height: auto;
}


body {
  font-family: var(--fonts-texts);
  font-weight: 300;
  font-size:${({ theme }) => theme.SPACING_ONE};
  margin: 0;
  line-height: inherit;
  background: ${({ theme }) => theme.colors.sevenary.three};

}

html{
  height: 100%;
  width: 100%;
  position: fixed;
  overflow: hidden;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 10px;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
  width: 0px;
  height: 0px;
  display: none;
}

::-webkit-scrollbar {
  width: 3px;
  height: 5px;
  background-color: transparent;
}


::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.quaternary.two};
  
}

#root{
  height: 100vh;
  display: flex;
  flex: 1;
  position: absolute;
}

`;
