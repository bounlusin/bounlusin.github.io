(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.PraiseButton = mod.exports;
	}
})(this, function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var PraiseButton = function () {
		function PraiseButton(counter) {
			_classCallCheck(this, PraiseButton);

			this.counter = counter || 0;
		}

		_createClass(PraiseButton, [{
			key: "plusOne",
			value: function plusOne() {
				this.counter++;
				this.changeText(this.counter);
			}
		}, {
			key: "changeText",
			value: function changeText() {}
		}, {
			key: "getCounter",
			value: function getCounter() {
				return this.counter;
			}
		}]);

		return PraiseButton;
	}();

	exports.default = PraiseButton;
});