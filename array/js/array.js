function isArray(object) {
  return Array.isArray(object);
}

function isArray2(object) {
  return object.constructor.name == "Array";
}

function isArray3(object) {
  return {}.toString.call(object) == "[object Array]";
}

function range(start, end, step) {
  if (end == undefined) {
    end = start;
    start = 1;
  }
  if (step == undefined) {
    step = 1;
  }
  var array = [];
  for (var i = start; i < end + 1; i = i + step) {
    array.push(i);
  }
  return array;
}

function compact(array) {
  return array.filter(function (element) {
    return element != false;
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
  var set = {};
  return array.filter(function (element) {
    var isExist = set[element];
    set[element] = true;
    return !isExist;
  })
}

function unique2(array) {
  var set = {};
  var i = 0;
  while (i < array.length) {
    if (set[array[i]]) {
      array.splice(i, 1);
    } else {
      set[array[i]] = true;
      i++;
    }
  }
  return array;
}

function last(array) {
  return array[array.length - 1];
}

function excludeLast(array, count) {
  if (count == undefined) {
    --array.length;
  } else {
    array.length = array.length - count;
  }
  return array;
}

function excludeLast2(array, count) {
  if (count == undefined) {
    count = 1;
  }
  for (var i = 0; i < count; i++) {
    array.pop();
  }
  return array;
}
