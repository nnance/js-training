var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b;
});

console.dir(array); // [1,2,12,21]
