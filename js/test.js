var assert = chai.assert;

describe("calc", function () {

  it("5 + 2 = 7", function () {
    assert.equal(calc(5, 2, "+"), 7);
  });

  it("'5' + 2 = '52'", function () {
    assert.equal(calc('5', 2, "+"), '52');
  });

  it("'a' + 'b' = 'ab'", function () {
    assert.equal(calc('a', 'b', "+"), 'ab');
  });

  it("0.2 + 0.1 = 0.3", function () {
    assert.equal(calc(0.2, 0.1, "+"), 0.3);
  });

  it("5 - 2 = 3", function () {
    assert.equal(calc(5, 2, "-"), 3);
  });

  it("'5' - 2 = 3", function () {
    assert.equal(calc('5', 2, "-"), 3);
  });

  it("5 * 2 = 10", function () {
    assert.equal(calc(5, 2, "*"), 10);
  });

  it("'5' * 2 = 10", function () {
    assert.equal(calc('5', 2, "*"), 10);
  });

  it("'a' * 'b' = 'NaN'", function () {
    assert.equal(isNaN(calc('a', 'b', "*")), true);
  });

  it("5 / 2 = 2.5", function () {
    assert.equal(calc(5, 2, "/"), 2.5);
  });

  it("'5' / 2 = 2.5", function () {
    assert.equal(calc('5', 2, "/"), 2.5);
  });

  it("5 int/ 2 = 3", function () {
    assert.equal(calc(5, 2, "int/"), 3);
  });

  it("7 int/ 3 = 2", function () {
    assert.equal(calc(7, 3, "int/"), 2);
  });

});