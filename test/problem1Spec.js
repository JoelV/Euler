var app = require('../problem1.js')();
var expect = require('expect.js');

describe('isMultiple3or5', function() {
  it('should tell if a number is a muiltipile of 3 or 5', function() {
    expect(app.isMultiple3or5(3)).to.be(true);
    expect(app.isMultiple3or5(5)).to.be(true);
    expect(app.isMultiple3or5(21)).to.be(true);
    expect(app.isMultiple3or5(20)).to.be(true);
    expect(app.isMultiple3or5(19)).to.be(false);
    expect(app.isMultiple3or5(1022)).to.be(false);
  });
});

describe('isMultiple7', function() {
  it('should tell if a number is a multiple of 7', function() {
    expect(app.isMultiple7(3)).to.be(false);
    expect(app.isMultiple7(7)).to.be(true);
    expect(app.isMultiple7(49)).to.be(true);
    expect(app.isMultiple7(50)).to.be(false);
  });
});