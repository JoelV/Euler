var expect = require('expect.js');
var app = require('../problem5.js')();

describe('isDivisibleOneThroughTen', function() {
  it('should tell if a number is divisible by the numbers 1 - 10', function() {
    expect(app.isDivisibleOneThroughTen(2520)).to.be(true);
  });
});