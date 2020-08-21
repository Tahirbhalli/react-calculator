/* eslint-disable import/no-extraneous-dependencies */
import Big from 'big.js';

const operate = (num1, num2, operation) => {
  const First = Big(num1);
  const Second = Big(num2);

  switch (operation) {
    case '+':
      return First.plus(Second);
    case '-':
      return First.minus(Second);
    case 'x':
      return First.times(Second);
    case '/':
      if (Second === 0) {
        return 'cannot divide by zero';
      }
      return First.div(Second);
    case '%':
      return First / 100;
    default:
      return First.times(Second.times(0.01));
  }
};

export default operate;
