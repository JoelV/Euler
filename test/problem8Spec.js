var expect = require('expect.js');
var app = require('../problem8')();

describe('app', function() {
  it('should return an array of products', function() {
    expect(app.productsConsecutive2('2345')).to.eql([6, 12, 20]);
    expect(app.biggestProductCons2('2345')).to.eql(20);
  });
});