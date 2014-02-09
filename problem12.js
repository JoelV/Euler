function triangle(n) {
  return n*(n+1)/2;
}

function numOfFactors(n) {
  var count = 0;
  for(var i = 1; i <= n; i++) {
    if(n%i === 0) count++;
  }
  return count;
}

function run(n) {
  var i = 1;
  while(numOfFactors(triangle(i)) <= n) i++;
  console.log(triangle(i));
}

run(500);
