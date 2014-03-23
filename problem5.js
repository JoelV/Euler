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
          var arry = [];
          for(var i = 2; i <= 20; i++) { arry.push(i); }
          return arry;
        }, 'and');
      i = 20;  
      while(!isDivisibleOneToTwenty(i)) { i += 20;}
      return i;
    }
  };
  return app;
};