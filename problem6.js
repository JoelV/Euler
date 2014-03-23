var utils = require('./lib/utils')();
var _ = require('underscore');
module.exports = function() {

  var app = {
    sumSquaresUpTo: utils.numFromSeq(
      function(arry) {
        return _.reduce(arry, function(cur, prev) { return cur + prev; }, 0);
      },
      function(n) {
        var arry = [];
        for(var i = 1; i <= n; i++) {
          arry.push(Math.pow(i, 2));
        }      
        return arry;
      }
    ),
    squareOfSumUpTo: function(n) {
      var sumUpTo = utils.numFromSeq(
        function(arry) {
          return _.reduce(arry, function(cur, prev) { return cur + prev; }, 0);
        },
        function(n) {
          var arry = [];
          for(var i = 1; i <= n; i++) {
            arry.push(i);
          }      
          return arry;
        }
      );
      var sum = sumUpTo(n);
      return Math.pow(sum, 2);
    },
    sumSquaresDiff: function(n) {
      return app.squareOfSumUpTo(n) - app.sumSquaresUpTo(n);
    }
  };
  return app;
};