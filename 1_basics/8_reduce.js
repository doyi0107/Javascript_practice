var arr = [1, 2, 3, 4, 5];
var newArr = arr.reduce(function(acc, v, i, arr) {
  return acc + v;
});

console.log(newArr); // 15

var arr = [1,2,3,4,5]
var newArr = arr.reduce(function(acc, v, i, arr) {
  return acc + v;
}, 100);

console.log(newArr); //115

