"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _big = _interopRequireDefault(require("big.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var operate = function operate(num1, num2, operation) {
  var First = (0, _big.default)(num1);
  var Second = (0, _big.default)(num2);

  switch (operation) {
    case '+':
      return First.plus(Second);

    case '-':
      return First.minus(Second);

    case 'x':
      return First.times(Second);

    case '/':
      try {
        var a = First.div(Second);
        return a;
      } catch (error) {
        return 'error';
      }

    case '%':
      return First / 100;

    default:
      return First.times(Second.times(0.01));
  }
};

var _default = operate;
exports.default = _default;