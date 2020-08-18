/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const Action = (oprator, num1, num2) => {
  switch (oprator) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      console.error('error');
      break;
  }
};

export default Action;
