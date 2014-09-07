var app = require('../problem14.js')();
var expect = require('expect.js');

describe('collatzNum', function() {
  expect(app.collatzNum(13)).to.be(40);
  expect(app.collatzNum(40)).to.be(20);
});

describe('collatzLength', function() {
  expect(app.collatzLength(13)).to.be(10);
});