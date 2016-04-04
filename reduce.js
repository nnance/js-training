var array = [8,6,4,2]
var singleVal = array.reduce(function(prevVal, curVal) {
  return prevVal + curVal;
}, 0);

console.log(singleVal); // 20
