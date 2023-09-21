const arr = [1,2,3,4,5];

const cute = arr.filter( (value) => {
  return value !== 1;
})

console.log(cute);
// [ 2, 3, 4, 5 ]