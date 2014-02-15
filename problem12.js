
module.exports = function() {

  function triangle(n) {
    return n*(n+1)/2;
  }

  function numOfDivisorsBruteForce(n) {
    var count = 0;
    for(var i = 1; i <= n; i++) {
      if(n%i === 0) count++;
    }
    return count;
  }

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

  function numOfDivisorsEloquent(n) {
    var primeDivisors = {}; 
    for(i = 2; i < n; i++) {
      var count = 0;
      while(n%i === 0) {
        count++;
        n = n/i;
      }
      if(count > 0) { 
        primeDivisors[i] = count;
        count = 0;
      }

      if(solution.isPrime(n) && n !== 1) {
        count++;
        primeDivisors[n] = count;
        n = 1;
      } 
    } 
    var result = 1;
    for(var key in primeDivisors) {
      if(primeDivisors.hasOwnProperty(key)) {
        result *= primeDivisors[key] + 1;
      }
    }
    return result;
  }

  function run(n) {
    var i = 1;
    var numberDivisors = 0; 
    while(numberDivisors <= n) {
      number = solution.triangle(i);
      numberDivisors = solution.numOfDivisors(number); 
      console.log('Number: ' + number + ' ---->Number of Divisors: ' + numberDivisors);
      i++;
    }
  }
  
  var solution = {
    triangle: triangle,
    numOfDivisors: numOfDivisorsEloquent,
    run: run,
    isPrime: isPrimeNaive
  };
  
  return solution;
};
