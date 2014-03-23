var app = require('../problem6')();
var expect = require('expect.js');

describe('sumSquares', function() {
  it('should find the sum of the squares', function() {
    expect(app.sumSquaresUpTo(10)).to.be(385);
  });
});

describe('squareSum', function() {
  it('should find the square of the sum', function() {
    expect(app.squareOfSumUpTo(10)).to.be(3025);
  });
});