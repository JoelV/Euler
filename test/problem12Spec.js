var app = require('../problem12.js')();
var expect = require('expect.js');

describe('triangle', function() {
  it('should return 28', function() {
    expect(app.triangle(7)).to.be(28);
  });
});

// describe('getPowers', function() {
//   it('should get the the powers', function() {
//     expect(app.getPowers([2, 2, 2, 2, 5, 5, 5])).to.eql([4,3]);
//     expect(app.getPowers([3, 3, 5, 11, 11])).to.eql([2,1,2]);
//     expect(app.getPowers([3,4,5,66])).to.eql([1,1,1,1]);
//   });
// });

describe('numOfDivisors', function() {
  it('should return 6', function() {
    expect(app.numOfDivisors(28)).to.be(6);
  });
  it('should return 20', function() {
    expect(app.numOfDivisors(2000)).to.be(20);
  });
  it('should return 100', function() {
    expect(app.numOfDivisors(45360)).to.be(100);
  });
  it('should return 8', function() {
    expect(app.numOfDivisors(389578)).to.be(8);
  });
});

describe('isPrime', function() {
  it('should return true', function() {
    expect(app.isPrime(3)).to.be(true);
    expect(app.isPrime(11)).to.be(true);
    expect(app.isPrime(824633720831)).to.be(true);
  });
  it('should return false', function() {
    expect(app.isPrime(6)).to.be(false);
    expect(app.isPrime(50)).to.be(false);
    expect(app.isPrime(129388123081230128309123892)).to.be(false);
  });
});

