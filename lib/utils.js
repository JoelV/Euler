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
  var app = {
    isMultiple: function(funToNum) {
      return function(num) {
        return num%funToNum() === 0;
      };
    },
    isPrime: isPrimeNaive,
    numFromSeq: function(reduceFun, funToArry) {
      return function() {
        return _.reduce(funToArry.apply(null, arguments), reduceFun, 0);
      };
    },
    isMultiples: function(funToArrayOfNums, mode) {
      var funArray = _.map(
        funToArrayOfNums(), 
        function(num) {
          return app.isMultiple(function() {
            return num;
          });
        }
      );
      try {
        return function(n) {
          if(mode === 'or') {
            for(var j = 0; j < funArray.length; j++) {
              if(funArray[j](n)) return true;
            }
            return false;
          } else if (mode === 'and') {
            for(var i = funArray.length-1; i >= 0; i--) {
              if(!funArray[i](n)) return false;
            }
            return true;
          } else {
            throw 'Invalid mode: can only be "and" "or"';
          } 
        };
      }
      catch(err) {
        console.log('Error: ' + err);
      }
    }
  };
  return app;
};