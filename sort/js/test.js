var assert = chai.assert;

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

describe("isSorted", function () {
  var items = [1, 3, 5, 7, 8];
  it(items + "  is sorted", function () {
    assert.equal(isSorted(items), true);
  });
});

describe("getArray", function () {
  var items = getArray(20);
  it("getArray(10): " + items, function () {
    assert.equal(items.length, 20);
  });
  it(items + " is sorted", function () {
    assert.equal(isSorted(items), true);
  });
});

describe("search", function () {
  var even = getArray(12);
  var odd = getArray(13);
  var shuffled = [1, 7, 5, 2, 9];
  var abc = ['a', 'b', 'c', 'd', 'e'];

  var test = function (func) {
    var iterate = function (arr) {
      it(func.name + "([" + arr + "], arr[index]) = index", function () {
        for (var i = 0; i < arr.length; i++) {
          assert.equal(func(arr, arr[i]), i);
        }
      });
    };

    iterate(even);
    iterate(odd);
    it(func.name + "([" + odd + "], Infinity) = -1", function () {
      assert.equal(func(odd, Infinity), -1);
    });

    it(func.name + "([" + odd + "], -Infinity) = -1", function () {
      assert.equal(func(odd, -Infinity), -1);
    });

    it(func.name + "([" + shuffled + "], 7) = -1", function () {
      assert.equal(func(shuffled, 7), -1);
    });
    it(func.name + "([" + odd + "]) = " + undefined, function () {
      assert.equal(func(odd), undefined);
    });
    it(func.name + "() = " + undefined, function () {
      assert.equal(func(), undefined);
    });
    it(func.name + "([" + abc + "], 'd') = 3", function () {
      assert.equal(func(abc, 'd'), 3);
    });

    var randomSize = Math.ceil(Math.random() * 1000000);
    var randomArray = getArray(randomSize);

    it(func.name + "(getArray(" + randomArray.length + "), Infinity) = -1", function () {
      assert.equal(func(randomArray, Infinity), -1);
    });

    it(func.name + "(getArray(" + randomArray.length + "), randomArray[end]) = end", function () {
      var end = randomArray.length - 1;
      assert.equal(func(randomArray, randomArray[end]), end);
    });

    it(func.name + "(getArray(" + randomArray.length + "), randomArray[0]) = 0", function () {
      assert.equal(func(randomArray, randomArray[0]), 0);
    });

    it(func.name + "(getArray(" + randomArray.length + "), randomArray[rand]) = rand", function () {
      var rand = Math.ceil(Math.random() * randomArray.length);
      assert.equal(func(randomArray, randomArray[rand]), rand);
    });
  }

  describe("cyclic binary search", function () {
    test(binarySearch.cyclic);
  });

  describe("recursive binary search", function () {
    test(binarySearch.recursive);
  })
});
