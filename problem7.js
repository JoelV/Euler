var utils = require('./lib/utils')();

module.exports = function() {
  var app =  {
    getNthPrime: function(n) {
      return utils.numFromSeq(
        function(arry) {
          return arry[arry.length-1];
        },
        function(n) {
          var primeArray = [];
          var i = 1;
          var count = 0; 
          while(count < n) {
            if(utils.isPrime(i)) {
              primeArray.push(i);
              count ++;
            }
            i++;
          }
          return primeArray;
        }
      ).call(this, n);
    }
  };
  return app;
};