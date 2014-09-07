var app = require('./problem14.js')();

var longestChain = {
  num: 0,
  length: 1 
};

for(var i = 1; i < 1000000; i++) {
  var seqLength = app.collatzLength(i);
  if(seqLength > longestChain.length) {
    longestChain.num = i;
    longestChain.length = seqLength;
  }
}

console.log(longestChain);