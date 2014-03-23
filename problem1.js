var _ = require('underscore');
var utils = require('./lib/utils')();
module.exports = function() {
  
  var isMultiple3or5 = utils.isMultiples(function() { return [3,5]; }, 'or');
  var isMultiple7 = utils.isMultiple(function() { return 7; });

  function sumNatural(multiples, n) {
    var sum = 0;
    var isMultiplesofNums = isMultiples(multiples);
    for(var i = 0; i < n; i++) {
      if(isMultiplesofNums(i)) { sum += i; }
    }
    return sum;
  }

  var app = {
    isMultiple3or5: isMultiple3or5,
    isMultiple7: isMultiple7,
    run: sumNatural
  };

  return app;
};