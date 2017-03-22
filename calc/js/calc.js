function calc(a, b, operation) {
  var result = NaN;
  var PRECISION = 1000000000;

  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    case 'int/':
      result = a / b;
      result = result > 0 ? Math.floor(result) : Math.ceil(result);
      break;
  }

  // rounding with given PRECISION for avoiding float point error
  return typeof result == "number" ? Math.round(result * PRECISION) / PRECISION : result;
};
