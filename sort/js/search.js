var binarySearch = (function () {
  var recursiveSearch = function (items, key, left, right) {
    if (_isInvalid(items, key)) return;
    if (left === undefined) left = 0;
    if (right === undefined) right = items.length - 1;
    var index = left + right >>> 1;
    if (left > right) return -1;
    if (items[index] === key) return index;
    if (items[index] > key) {
      return recursiveSearch(items, key, left, index - 1);
    } else {
      return recursiveSearch(items, key, index + 1, right);
    }
  };

  var cyclicSearch = function (items, key) {
    if (_isInvalid(items, key)) return;
    var index = items.length >>> 1;
    var maxSteps = Math.log(items.length) / Math.log(2) - 2;
    for (var i = 0; items[index] !== key && i <= Math.ceil(maxSteps) + 1; i++) {
      index += (Math.round(Math.pow(2, maxSteps - i)) || 1) * ((items[index] > key) ? -1 : 1);
    }
    return items[index] === key ? index : -1;
  };

  var _isInvalid = function isInvalid(items, value) {
    return !Array.isArray(items) || value === undefined
  };

  return {
    recursive: recursiveSearch,
    cyclic: cyclicSearch
  }
})();
