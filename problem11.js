var fs = require('fs');
var _ = require('underscore');
var q = require('q');

function formatInput(fileName) {
  var data = fs.readFileSync(__dirname + '/' + fileName, 'utf8');
  var formatted = [];
  var i = 0;
  var j = 0;
  var k = 0;
  formatted[j] = [];
  while(i < data.length) {
    var tempStr = '';
    while(!_.isNaN(parseInt(data[i]))) {
      tempStr += data[i];
      i++;
    }
    formatted[j].push(parseInt(tempStr));
    if(data[i] === '\n') {
      j++;
      formatted[j] = [];
    }
    i++;
  }
  return formatted;
}

function getBottom(array, i, j) {
  return function(distance) {
    return array[i + distance][j];
  };
}

function getNumbersBot(array, i, j, distance) {
  if(i + distance > array.length) { return []; }
  var bot = getBottom(array, i, j);
  var num = [];
  _.times(distance, function(index) {
    num[index] = bot(index);  
  }); 
  return num;
}

function getDiagDown(array, i, j) {
  return function(distance) {
    return array[i + distance][j + distance];
  };
}

function getDiagUp(array, i, j) {
  return function(distance) {
    return array[i-distance][j+distance];
  };
}

function getNumbersDiagDown(array, i, j, distance) {
  if(i + distance > array.length || j + distance > array[i].length) { return []; }
  var diag = getDiagDown(array, i, j); 
  var num = [];
  _.times(distance, function(index) {
    num[index] = diag(index);
  });
  return num;
}

function getNumbersDiagUp(array, i, j, distance) {
  if(i - distance < 0 || j + distance > array[i].length) { return []; }
  var diag = getDiagUp(array, i, j);
  var num = [];
  _.times(distance, function(index) {
    num[index] = diag(index);
  });
  return num;
}


function getRight(array, i, j) {
  return function(distance) {
    return array[i][j + distance];
  };
}

function getNumbersRight(array, i, j, distance) {
  if(j + distance > array[i].length) { return []; }
  var right = getRight(array, i, j);
  var num = [];
  _.times(distance, function(index) {
    num[index] = right(index); 
  });
  return num;
}

Array.prototype.multiply = function() {
  if(this.length === 0) return undefined;
  return _.reduce(this, function(prev, cur) { return prev * cur; }, 1);
};

var grid = formatInput('problem11Input.txt');
var mults = [];
_.each(grid, function(data, i) {
  _.each(grid[i], function(data1, j) {
    mults.push(getNumbersRight(grid, i, j, 4).multiply());
    mults.push(getNumbersBot(grid, i, j, 4).multiply());
    mults.push(getNumbersDiagDown(grid, i, j, 4).multiply());
    mults.push(getNumbersDiagUp(grid, i, j, 4).multiply());
  });
});
console.log(_.chain(mults).compact().max().value());
