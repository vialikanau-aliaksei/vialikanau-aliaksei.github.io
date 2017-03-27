function isArray(object) {
  return object.constructor.name == "Array";
}

function isArray2(object) {
  return ({}).toString.call(object) == "[object Array]";
}

function range(start, end, step) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  if (step === undefined) {
    step = 1;
  }
  var array = [];
  for (var i = start; i < end; i = i + step) {
    array.push(i);
  }
  return array;
}

function compact(array) {
  return array.filter(function (element) {
    return element;
  });
}

function sum(array) {
  return array.reduce(function (sum, element) {
    return sum + element;
  }, 0)
}

function sum2(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


function unique(array) {
  var values = [];
  array.forEach(function (element) {
    if (!~values.indexOf(element)) {
      values.push(element);
    }
  });
  return values;
}

function unique2(array) {
  var values = [];
  for (var i = 0; i < array.length; i++) {
    if (!~values.indexOf(array[i])) {
      values.push(array[i]);
    }
  }
  return values;
}

function last(array) {
  return array[array.length - 1];
}

function excludeLast(array, count) {
  if (count === undefined) {
    count = 1;
  }
  count = count > 0 ? count : 0;
  return array.slice(0, array.length - count);

}

function excludeLast2(array, count) {
  if (count === undefined) {
    count = 1;
  }
  count = count > 0 ? count : 0;
  var result = [];
  for (var i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
}
