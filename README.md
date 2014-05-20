# Knockout Spin Binding

> Simple knockout binding that wraps [spin.js](http://fgnass.github.io/spin.js/).

## Install with [Bower](http://bower.io/)

```
bower install knockout-spin
```

Then add `knockout.spin.js` to your project.

## How to Use

Include the script on your page (either via a normal script tag or via an AMD loader). Then use it like so:

```html
<span data-bind="spinner: yourBooleanObservable, spinnerOptions: { 'top': 0, 'left': 0 }"></span>
```