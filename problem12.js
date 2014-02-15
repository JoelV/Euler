
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
    var primeDivisorsArray = []; 
    for(i = 2; i < n; i++) {
      while(n%i === 0) {
        primeDivisorsArray.push(i);
        n = n/i;
      }
      if(solution.isPrime(n) && n !== 1) {
        primeDivisorsArray.push(n);
        n = 1;
      }
    }      

    var powers = getPowers(primeDivisorsArray);
    var result = 1;
    for(var i = 0; i < powers.length; i++) {
      result *= powers[i]+1;
    }
    return result;
  }

  function getPowers(arry) {
    var result = [];
    var num = arry[0];
    var count = 0;
    while(arry.length > 0) {
      for(var i = 0; i < arry.length; i++) {
        if(num === arry[i]) count++;
        else break;
      }
      result.push(count);
      arry.splice(0, count);
      count = 0;
      num = arry[0];
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
    isPrime: isPrimeNaive,
    getPowers: getPowers
  };
  
  return solution;
};
