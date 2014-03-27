var expect = require('expect.js');
var app = require('../problem7.js')();

describe('nthPrime', function() {
  it('should return the nth prime', function() {
    expect(app.getNthPrime(6)).to.eql(13);
  });
});