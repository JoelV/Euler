var utils = require('./lib/utils.js')();
var _ = require('underscore');

module.exports = function() {
  var app = {
    isDivisibleOneThroughTen: utils.isMultiples(
      function() {
        var arry = [];
        for(var i = 1; i <= 10; i++) { arry.push(i); }
        return arry;
      }, 'and'),
    smallestNumDivOneThroughTwenty: function() {
      var isDivisibleOneToTwenty = utils.isMultiples(
        function() {
          return [3,4,5,11,13,14,15,16,17,18,19,20];
        }, 'and');
      i = 20;  
      while(!isDivisibleOneToTwenty(i)) { i += 20;}
      return i;
    }
  };
  return app;
};