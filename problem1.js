var _ = require('underscore');
module.exports = function() {
  function isMultiple(n) {
    return function(num) {
      return num%n === 0;
    };
  }

  var isMultiples = function(nums) {
    var funArray = _.map(nums, function(num) { return isMultiple(num); });
    return function(n) {
      var bools = _.map(funArray, function(fun) { return fun(n); });
      return _.contains(bools, true);
    };
  };

  var isMultiple3or5 = isMultiples([3,5]);
  var isMultiple7 = isMultiples([7]);

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