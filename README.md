# Knockout Spin Binding

Simple knockout binding that wraps [spin.js](http://fgnass.github.io/spin.js/).

## Installation

```
npm install knockout.spin --save
```

## Usage

```js
require("knockout.spin");
```

```html
<span data-bind="spinner: yourBooleanObservable, spinnerOptions: { 'top': 0, 'left': 0 }"></span>
```
