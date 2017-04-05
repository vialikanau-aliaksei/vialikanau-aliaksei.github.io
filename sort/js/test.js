var assert = chai.assert;

describe("_isSorted", function () {
  var items = [1, 3, 5, 7, 8];
  it(items + "  is sorted", function () {
    assert.equal(_isSorted(items), true);
  });
});

describe("_getArray", function () {
  var items = _getArray(20);
  it("_getArray(10): " + items, function () {
    assert.equal(items.length, 20);
  });
  it(items + " is sorted", function () {
    assert.equal(_isSorted(items), true);
  });
});

describe("search", function () {
  var even = _getArray(12);
  var odd = _getArray(13);
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

    var randomArray = _getArray(10000000);

    it(func.name + "(_getArray(" + randomArray.length + "), Infinity) = -1", function () {
      assert.equal(func(randomArray, Infinity), -1);
    });
  }

  describe(binarySearch.name, function () {
    test(binarySearch);
  });

  describe(recursiveBinarySearch.name, function () {
    test(recursiveBinarySearch);
  })
});


