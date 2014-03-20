var expect = require('expect.js');
var app = require('../problem2.js')();

describe('fib10', function() {
  it('should sum the number that are even under 10', function() {
    expect(app.fib10()).to.be(10);
  });
});