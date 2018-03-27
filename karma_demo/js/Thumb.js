(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './PraiseButton.js'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./PraiseButton.js'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.PraiseButton);
		global.Thumb = mod.exports;
	}
})(this, function (exports, _PraiseButton2) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _PraiseButton3 = _interopRequireDefault(_PraiseButton2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

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

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Thumb = function (_PraiseButton) {
		_inherits(Thumb, _PraiseButton);

		function Thumb(selector) {
			_classCallCheck(this, Thumb);

			var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

			_this.container = $(selector);
			_this.textNode = $('<div class="counter-container"><span>' + _this.counter + '</span></div>');

			var buttonNode = $('<div class="button-container"><div class="praise-button"></div></div>');
			var buttonTemplate = '';

			for (var i = 0; i < 8; i++) {
				buttonTemplate += '<div class="button-child"></div>';
			}
			buttonNode.find('.praise-button').append(buttonTemplate);

			var wrapper = $('<div class="wrapper"></div>');
			wrapper.append(buttonNode).append(_this.textNode);
			_this.container.append(wrapper);

			_this.container.find('.praise-button').on('click', _this.onPlusOne.bind(_this));
			return _this;
		}

		_createClass(Thumb, [{
			key: 'onPlusOne',
			value: function onPlusOne() {
				var _this2 = this;

				this.container.find('.praise-button').addClass('shake');
				this.container.find('.praise-button').on('animationend', function () {
					return _this2.container.find('.praise-button').removeClass('shake');
				});
				this.plusOne();
			}
		}, {
			key: 'changeText',
			value: function changeText(number) {
				this.textNode.find('span').text(number);
			}
		}]);

		return Thumb;
	}(_PraiseButton3.default);

	exports.default = Thumb;
});