var RANDOM_STEP = 8;

function _nextRandom() {
  return Math.floor(Math.random() * RANDOM_STEP);
}

function _getArray(size) {
  var array = [size];
  array[0] = Math.floor(Math.random() * (-size * RANDOM_STEP >> 2));
  for (var i = 1; i < size; i++) {
    array[i] = array[i - 1] + Math.floor(Math.random() * RANDOM_STEP + 1);
  }
  return array;
}

function _isSorted(items) {
  if (!Array.isArray(items)) return;

  var prev = -Infinity;
  for (var i = 0; i < items.length; i++) {
    if (prev > items[i]) return false;
    prev = items[i];
  }
  return true;
}

function _invalid(items, value) {
  return !Array.isArray(items) || value === undefined
}

function binarySearch(items, key) {
  if (_invalid(items, key)) return;
  var index = delta = items.length >>> 1;
  var maxSteps = Math.ceil(Math.log(items.length) / Math.log(2));
  for (var i = 0; items[index] !== key && i <= maxSteps; i++) {
    var delta = delta > 2 ? delta >>> 1 : 1;
    index += (items[index] > key) ? -delta : delta;
  }
  return items[index] === key ? index : -1;
}


function recursiveBinarySearch(items, key, left, right) {
  if (_invalid(items, key)) return;
  if (left === undefined) left = 0;
  if (right === undefined) right = items.length;
  var index = left + right >>> 1;
  if (items[index] === key) return index;
  if (left > right) return -1;
  if (items[index] > key) {
    return recursiveBinarySearch(items, key, left, index - 1);
  } else {
    return recursiveBinarySearch(items, key, index + 1, right);
  }
}







