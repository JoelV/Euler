var app = require('../problem4.js')();
var expect = require('expect.js');

describe('palindrome', function() {
  it('should tell if a number is a palindrome', function() {
    expect(app.isNumPalindrome(321)).to.be(false);
    expect(app.isNumPalindrome(111)).to.be(true);
  });
});