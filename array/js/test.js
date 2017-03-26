var assert = chai.assert;

describe("isArray", function () {

  it("[1,2]", function () {
    assert.equal(isArray([1, 2]), true);
  });
});

describe("isArray2", function () {

  it("[1,2]", function () {
    assert.equal(isArray2([1, 2]), true);
  });
});

describe("range", function () {

  it("range(5)", function () {
    assert.deepEqual(range(5), [0, 1, 2, 3, 4]);
  });

  it("range(1, 5)", function () {
    assert.deepEqual(range(1, 5), [1, 2, 3, 4]);
  });

  it("range(1, 10, 2)", function () {
    assert.deepEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
  });

  it("range(-3, 5, 3)", function () {
    assert.deepEqual(range(-3, 5, 3), [-3, 0, 3]);
  });
});

describe("compact", function () {

  it("compact([1, 0, 3, false, 5, NaN, null, undefined, '', Infinity])", function () {
    assert.deepEqual(compact([1, 0, 3, false, 5, NaN, null, undefined, '', Infinity]), [1, 3, 5, Infinity]);
  });
});

describe("sum", function () {

  it("sum([1, 2, 3, 4, 5])", function () {
    assert.equal(sum([1, 2, 3, 4, 5]), 15);
  });
});

describe("sum2", function () {

  it("sum2([1, 2, 3, 4, 5])", function () {
    assert.equal(sum2([1, 2, 3, 4, 5]), 15);
  });
});


describe("unique", function () {
  var func = function () {
    return 2;
  };
  var obj1 = {
    val1: "value1"
  };
  var obj2 = {
    val2: "value2"
  };

  it("unique([1, 2, 2, func, func, obj1, obj1, obj2, 'a', 'a'])", function () {
    assert.deepEqual(unique([1, 2, 2, func, func, obj1, obj1, obj2, 'a', 'a']),
      [1, 2, func, obj1, obj2, 'a']);
  });

  it("unique2([1, 2, 2, func, func, obj1, obj1, obj2, 'a', 'a'])", function () {
    assert.deepEqual(unique2([1, 2, 2, func, func, obj1, obj1, obj2, 'a', 'a']),
      [1, 2, func, obj1, obj2, 'a']);
  });
});

describe("last", function () {

  it("last([1, 2, 3, 3, 2])", function () {
    assert.equal(last([1, 2, 3, 3, 2]), 2);
  });
});

describe("excludeLast", function () {

  it("excludeLast([1, 2, 3, 3, 2])", function () {
    assert.deepEqual(excludeLast([1, 2, 3, 3, 2]), [1, 2, 3, 3]);
  });

  it("excludeLast([1, 2, 3, 3, 2], 2)", function () {
    assert.deepEqual(excludeLast([1, 2, 3, 3, 2], 2), [1, 2, 3]);
  });
});

describe("excludeLast2", function () {

  it("excludeLast2([1, 2, 3, 3, 2])", function () {
    assert.deepEqual(excludeLast([1, 2, 3, 3, 2]), [1, 2, 3, 3]);
  });

  it("excludeLast2([1, 2, 3, 3, 2], 2)", function () {
    assert.deepEqual(excludeLast([1, 2, 3, 3, 2], 2), [1, 2, 3]);
  });
});
