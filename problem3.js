var utils = require('./lib/utils.js')();
var _ = require('underscore');  

function primeFactors(n) { //from stackoverflow
  var factors = [];
  var d = 2;
  while(n > 1) {
    while(n%d === 0) {
      factors.push(d);
      n /= d;
    }
    d += 1;
    if(d*d > n) {
      if(n > 1) {
        factors.push(n);
        break;
      }
    }
  }
  return factors;  
}
function numFromSeq(reduceFun, funToArry) {
  return function(n) {
    return _.reduce(funToArry.apply(null, [n]), reduceFun, 0);
  };
}

module.exports = function() {
  return {
    biggestPrimeFactorsOf: numFromSeq(function(prev, cur) { 
      return prev > cur ? prev : cur; 
    }, primeFactors) 
  };   
};


// def prime_factors(n):
//     """Returns all the prime factors of a positive integer"""
//     factors = []
//     d = 2
//     while n > 1:
//         while n % d == 0:
//             factors.append(d)
//             n /= d
//         d = d + 1
//         if d*d > n:
//             if n > 1: factors.append(n)
//             break
//     return factors
