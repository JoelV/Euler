var _ = require('underscore');
var utils = require('./lib/utils')();

module.exports = function() {
  function prdConsecutive(n) {
    return function(numStr) {
      var productsArray = [];
      var numArray = numStr.split('');
      var products = function(prev, cur) { return prev*cur; };
      for(var i = 0; i <= numStr.length-n; i++) {
        var end = i + n;
        var nums = numArray.slice(i, end);
        var product = _.reduce(nums, products, 1);
        productsArray.push(product);
      }
      return productsArray;
    };
  }

  return {
    productsConsecutive2: prdConsecutive(2),
    biggestProductCons2: utils.numFromSeq(
      function(array) {
        return _.max(array);
      },
      prdConsecutive(2)
    ),
    biggestProductCons5: utils.numFromSeq(
      function(array) {
        return _.max(array);
      },
      prdConsecutive(5)
    )
  };
};