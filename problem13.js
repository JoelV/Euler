var _ = require('underscore');
var fs = require('fs');
var bigInt = require("big-integer");

var input = fs.readFileSync('./problem13.input', 'utf8');

var arrayNums = input.split('\n');

var sum = _.reduce(arrayNums, function(prev, cur) {
  if(!prev) return bigInt(cur);
  return bigInt(prev).add(bigInt(cur)); 
});
var arraySum = sum.toString().split('');

_.times(10, function(i) {
  console.log(arraySum[i]);
});
