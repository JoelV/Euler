var app = require('../problem10')();
var expect = require('expect.js');

describe('problem10', function() {
  it.only('should return the sum of primes less than 10', function() {
    expect(app.sumOfPrimesLessThan(10)).to.eql(17);
  });
});
