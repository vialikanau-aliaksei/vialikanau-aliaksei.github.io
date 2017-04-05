function getArray(size) {
  var RANDOM_STEP = 8;
  var array = [size];
  array[0] = Math.floor(Math.random() * (-size * RANDOM_STEP >> 2));
  for (var i = 1; i < size; i++) {
    array[i] = array[i - 1] + Math.floor(Math.random() * RANDOM_STEP + 1);
  }
  return array;
}

function isSorted(items) {
  if (!Array.isArray(items)) return;

  var prev = -Infinity;
  for (var i = 0; i < items.length; i++) {
    if (prev > items[i]) return false;
    prev = items[i];
  }
  return true;
}

function isInvalid(items, value) {
  return !Array.isArray(items) || value === undefined
}

function binarySearch(items, key) {
  if (isInvalid(items, key)) return;
  var index = items.length >>> 1;
  var maxSteps = Math.log(items.length) / Math.log(2) - 2;
  for (var i = 0; items[index] !== key && i <= Math.ceil(maxSteps) + 1; i++) {
    index += (Math.round(Math.pow(2, maxSteps - i)) || 1) * ((items[index] > key) ? -1 : 1);
  }
  return items[index] === key ? index : -1;
}

function recursiveBinarySearch(items, key, left, right) {
  if (isInvalid(items, key)) return;
  if (left === undefined) left = 0;
  if (right === undefined) right = items.length - 1;
  var index = left + right >>> 1;
  return left > right ? -1 : items[index] === key ? index :
    items[index] > key ? recursiveBinarySearch(items, key, left, index - 1)
      : recursiveBinarySearch(items, key, index + 1, right);
}
