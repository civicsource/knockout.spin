var ko = require("knockout");
var objectAssign = require("object-assign");
var Promise = require("pinkie-promise");
var Spinner = require("spin.js");

ko.bindingHandlers.spinner = {
	init: function (element, valueAccessor, allBindings) {
		// initialize the object which will return the eventual spinner
		element.spinner = new Promise(function (resolve) {
			// force this to the bottom of the event queue in the rendering thread,
			// so we can get the computed color of the containing element after other bindings
			// (e.g. class, style) have evalutated.
			// HACK: add some more delay as the class bindings of the parent fire asynchronously.
			setTimeout(function () {
				var options = {};
				options.color = element.ownerDocument.defaultView.getComputedStyle(element, null).color;
				objectAssign(options, ko.bindingHandlers.spinner.defaultOptions, ko.unwrap(allBindings.get("spinnerOptions")));

				resolve(new Spinner(options));
			}, 30);
		});
	},
	update: function (element, valueAccessor) {
		// when the spinner exists, pick up the existing one and call appropriate methods on it

		var result = ko.unwrap(valueAccessor());

		element.spinner.then(function (spinner) {
			var isSpinning = result;
			if (isSpinning) {
				element.style.display = "";
				spinner.spin(element);
			} else {
				if (spinner.el) { //don't stop first time
					spinner.stop();
				}

				element.style.display = "none";
			}
		});
	},
	defaultOptions: {
		lines: 19,
		length: 0,
		width: 2,
		corners: 0,
		radius: 5,
		speed: 2.5,
		trail: 20
	}
};
