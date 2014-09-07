var _ = require('underscore');

module.exports = function() {
  function collatzNum(n) {
    if(n % 2 === 0) {
      return n/2;
    } else {
      return 3*n+1;
    }
  }

  function collatzLength(n) {
    var seq = [];
    while(n !== 1) {
      var temp = collatzNum(n);
      seq.push(temp);
      n = temp;
    } 
    return seq.length + 1;
  }
  return {
    collatzNum: collatzNum,
    collatzLength: collatzLength
  };
};
