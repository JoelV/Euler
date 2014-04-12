var utils = require('./lib/utils')();
var _ = require('underscore');

module.exports = function() {
  return {
    sumOfPrimesLessThan: function(x) {
      return utils.numFromSeq(
        function(arry) {
          return  _.reduce(arry, function(prev, cur) { return prev + cur; }, 0);
        },
        function(x) {
          var primeArray = [];
          for(var i = 2; i < x; i++) {
            if(utils.isPrime(i))  primeArray.push(i);
          }
          return primeArray;
        }
      ).call(this, x);
    }
  };
};