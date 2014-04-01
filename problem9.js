var utils = require('./lib/utils')();
var _ = require('underscore');
module.exports = function() {
  function getThird(n) { 
    return function(x, y) {
      return n - x - y;
    };
  }

  function rules(truthyFn) {
    return function() {
      return truthyFn.apply(this, arguments);
    };
  }
  return {
    triplets: function() {
      var getThirdSum1000 = getThird(1000);
      var i,
        j,
        k;
      var isValid = rules(function(i,j,k) {
        return Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2);
      });
      for(i = 1; i <= 334; i++) {
        for(j = 2; j <= 500; j++) {
          k = getThirdSum1000(i, j);
          if(isValid(i,j,k)) {
            return i*j*k;
          }
        }
      }
    }
  };
};