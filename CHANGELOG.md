<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Changelog

- [v0.7.1](#v071)
- [v0.7.0](#v070)
- [v0.6.0](#v060)
- [v0.5.0](#v050)
- [v0.4.1](#v041)
- [v0.4.0](#v040)
- [v0.3.2](#v032)
- [v0.3.0](#v030)
- [v0.2.10](#v0210)
- [v0.2.8](#v028)
- [v0.2.7](#v027)
- [v0.2.3](#v023)
- [v0.2.2](#v022)
- [v0.1.1](#v011)
- [v0.1.0](#v010)
- [v0.0.1](#v001)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### v0.7.1

- Fixed see-through issues at the top-edge of the viewport on mobile browsers when location-bar is hidden (see #25 - Thanks @rivo)

### v0.7.0

- Added jsnext:main / modules build (for webpack2 and rollup). Based on (reactjs/redux#1042)

### v0.6.0

- Added ability to add custom classes to ModalDialog (see #22 and #23 - Thanks @cvetanov)
- Added ability to add custom classes to ModalHeader and optimized its render method (see #22 and #23 - Thanks @cvetanov)

### v0.5.0

- Add support for nested modals (see #19 and #16 - Thanks @schryer)
- Fix a bug which caused body class and style modifications to not be removed when unmounting an open modal (see #19 and #16 - Thanks @schryer)

### v0.4.1

 * Fixed react warning when passing unknown props to dom elements (issue #13, thanks @worg)

### v0.4.0

 * Added react 15 to peerDependency range
 * Get rid of binding in render calls
 * Chore: Upgrade requirements
 * Chore: Update eslint rules and change code formatting
 * Use `babel-plugin-transform-runtime` and add `babel-runtime` to peerDependencies

### v0.3.2

 * Fixed issue with dynamic require calls caused by the utility
   library for version agnostic calls react api calls.

   **Note for react 0.13.X:** Must import modal from `tg-modal/v013`

### v0.3.0

 **PLEASE UPGRADE TO 0.3.2**

 * Now supports react 0.13-0.14
 * Bugfix for IE11 (classList.toggle does not accept second argument)
 * Replaced `noWrap` with `autoWrap`. Modal body is not automatically wrapped
   by default anymore
 * Made `onCancel` also handle `onRequestClose` logic
 * Removed `onRequestClose`
 * Updated requirements
 * Separated all browser specific logic from core logic (simplifies future native modal release)
 * Keyboard listeners can be toggled via `keyboard` prop
 * Fixed chrome flicker issue
 * New examples page layout

 see [migrating](./Migrate.md) for migration guide

### v0.2.10

 * Fixed issue with escape triggering onRequestClose (see #7, thanks @schryer)

### v0.2.8

  * Fix bug with padding update logic (caused padding right to increment each re-render close/open of modal)

### v0.2.7

  * Fix bug with unbindKeyboard

### v0.2.3

  * Fix issues with animations
  * Also publish default.scss to npm when releasing

### v0.2.2

  * Fix various backdrop click issues
  * Fix exports & add tests against breaking them
  * Fix problems with the package configuration

### v0.1.1

  * Added server-side examples/recipe
  * Dynamically calculate the scrollbar size

### v0.1.0

  * Core logic
  * Added examples
  * Basic modal variant
  * Static modal
  * Handle keyboard events

### v0.0.1

  * tg-modal initial commit.
