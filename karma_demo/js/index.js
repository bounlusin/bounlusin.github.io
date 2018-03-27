(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "systemjs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("jquery"), require("systemjs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jquery, global.systemjs);
    global.index = mod.exports;
  }
})(this, function (_jquery, _systemjs) {
  "use strict";

  var _jquery2 = _interopRequireDefault(_jquery);

  var _systemjs2 = _interopRequireDefault(_systemjs);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});