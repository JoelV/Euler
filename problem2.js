var utils = require('./lib/utils.js')();
var _ = require('underscore');

module.exports = function() {
  function sumSeq(untilFun, truthy, seqToSingleNum) {
    return function() {
      return seqToSingleNum.apply(null, [untilFun, truthy]); 
    };
  }

  function fibSum(untilFun, truthy) {
    var sum = 0;
    var prev = 1;
    var n;
    if(truthy(prev)) { sum += prev; }
    for(var i = 2; i <= untilFun.call(); i+=n) {
      if(truthy(i)) { sum+= i;}
      n = prev;
      prev = i;
    }
    return sum;  
  }
  return {
    isEven: utils.isMultiple(2),
    fibSumEvenUnderFourMil: sumSeq(function() { return 4000000; }, utils.isMultiple(function() { return 2; }), fibSum), 
    fib10: sumSeq(function() { return 10; }, utils.isMultiple(function() { return 2; }), fibSum)
  };
};