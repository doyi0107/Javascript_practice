let arr = [];

for (let i = 0; i < 7; i++) {
    arr.push(i)
  }
  console.log(arr);
//   [ 0, 1, 2, 3, 4, 5, 6]

const doyi = {
    name : 'doyi',
    year : 2023
}

/*객체에서 가져오면 키값*/

for(let key in doyi){
    console.log(key);
}
// name
// year


/*인덱스에서 가져오면 키는 인덱스값*/ 
const ivememberArray = ['안유진','가을','이서','장원영','레이','리즈']

for (let key in ivememberArray) {
   console.log(key);
}
// 0
// 1
// 2
// 3
// 4
// 5

