var expect = require('expect.js');
var app = require('../problem3.js')();

describe('biggestPrimeFactorsOf', function() {
  it('should return the biggest prime factor of n', function() {
    expect(app.biggestPrimeFactorsOf(13195)).to.eql(29);
  });
});
