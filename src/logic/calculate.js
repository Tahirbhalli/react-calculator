/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import operate from './operate';

const calculate = (object, buttonName) => {
  let {
    total, next, operation,
  } = object;
  switch (buttonName) {
    case '.':
      if (!total.includes('.')) { total += '.'; }
      break;
    case 'AC':
      total = 0;
      next = 0;
      operation = '\0';
      break;
    case '+/-':
      total = operate(total, -1, 'x');
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
      next = total;
      operation = '%';
      total = '%';
      break;
    case '=':
      if (operation && !['+', '-', 'x', '/', '%'].includes(total) && next) {
        total = operate(parseFloat(next), parseFloat(total), operation).toString();
      }
      break;
    default:
      ['+', '-', 'x', '/', '%'].includes(total) ? total = buttonName : total += buttonName;
      break;
  }
  return {
    total, next, operation,
  };
};

export default calculate;
