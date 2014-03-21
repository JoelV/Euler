var utils = require('./lib/utils')();

module.exports = function() {

  function isNumCond(conditionFun) {
    return function(num) {
      return conditionFun.apply(null, [num]);
    };
  }

  var app = {
    isNumPalindrome: isNumCond(function(num) { 
      return num.toString() === num.toString().split('').reverse().join('');
    }),
    greatestPalindrome: utils.numFromSeq(
      function(prev, cur) { return prev > cur ? prev: cur; },
      function() {
        var arrayPal = [];
        for(var i = 100; i<= 999; i++) {
          for(var j = 100; j <= 999; j++) {
            if(j>=i) {
              var mult = i*j;
              if(app.isNumPalindrome(mult)) {
                arrayPal.push(mult);
              }
            }
          }
        }
        return arrayPal;
      }  
    )
  };
  return app;
};