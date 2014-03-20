module.exports = function() {
  return {
    isMultiple: function(n) {
      return function(num) {
        return num%n === 0;
      };
    }
  }
};