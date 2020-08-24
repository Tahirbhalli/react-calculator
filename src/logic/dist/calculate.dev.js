"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _operate = _interopRequireDefault(require("./operate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */

/* eslint-disable no-unused-expressions */
var calculate = function calculate(object, buttonName) {
  var total = object.total,
      next = object.next,
      operation = object.operation;

  switch (buttonName) {
    case '.':
      if (!total.includes('.')) {
        total += '.';
      }

      break;

    case 'AC':
      total = 0;
      next = 0;
      operation = '\0';
      break;

    case '+/-':
      total = (0, _operate.default)(total, -1, 'x');
      break;

    case '+':
      next = total;
      operation = '+';
      total = '+';
      break;

    case '-':
      next = total;
      operation = '-';
      total = '-';
      break;

    case 'X':
      next = total;
      operation = 'x';
      total = 'x';
      break;

    case '/':
      next = total;
      operation = '/';
      total = '/';
      break;

    case '%':
      total = (0, _operate.default)(parseFloat(total), parseFloat(total), '%');
      break;

    case '=':
      if (operation && !['+', '-', 'x', '/', '%'].includes(total) && next) {
        total = (0, _operate.default)(parseFloat(next), parseFloat(total), operation).toString();
      }

      break;

    default:
      ['+', '-', 'x', '/', '%'].includes(total) ? total = buttonName : total += buttonName;
      break;
  }

  return {
    total: total,
    next: next,
    operation: operation
  };
};

var _default = calculate;
exports.default = _default;