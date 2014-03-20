var utils = require('./lib/utils.js')();
module.exports = function() {
  function sumSeq(max, truthy, seq) {
    return function() {
      return seq.apply(null, [max, truthy]); 
    };
  }

  function fib(max, truthy) {
    var sum = 0;
    var prev = 1;
    var n;
    if(truthy(prev)) { sum += prev; }
    for(var i = 2; i <= max; i+=n) {
      if(truthy(i)) { sum+= i;}
      n = prev;
      prev = i;
    }
    return sum;  
  }
  return {
    isEven: utils.isMultiple(2),
    fibSumEvenUnderFourMil: sumSeq(4000000, utils.isMultiple(2), fib), 
    fib10: sumSeq(10, utils.isMultiple(2), fib)
  };
};