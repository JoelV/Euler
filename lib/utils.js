var _ = require('underscore');
module.exports = function() {
  function isPrimeNaive(n) {
    if(n < 2) return false;
    else if(n === 2 || n === 3) return true;
    else if(n%2 === 0 || n%3 === 0) return false;
    else {
      var maxDivisor = Math.sqrt(n);
      for(var i = 5; i <= maxDivisor; i+=6) {
        if(n % i === 0 || n%(i + 2) === 0) return false;
      }
      return true;
    }
  }
  return {
    isMultiple: function(funToNum) {
      return function(num) {
        return num%funToNum.call(null) === 0;
      };
    },
    isPrime: isPrimeNaive,
    numFromSeq: function(reduceFun, funToArry) {
      return function() {
        return _.reduce(funToArry.apply(null, arguments), reduceFun, 0);
      };
    }
  };
};