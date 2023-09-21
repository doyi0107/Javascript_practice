let numbers = [1,2,3,4,5,6];


// flag가 forEach함수문에 이름이라고 생각하면 됨 
numbers.forEach( flag => console.log(flag) ); 
// 1
// 2
// 3
// 4
// 5
// 6


// push이용한 foreach문 
 
let fruit = ['apple'];

fruit.forEach( flag => numbers.push(flag) ); 
// fruit의 배열이 numbers의 맨 뒤에 들어감
// push를 넣으면 맨 마지막에 붙는 것 flag 는 fruit.forEach함수문의 이름  

console.log(numbers);
// [ 1, 2, 3, 4, 5, 6, 'apple' ]


// sum을 이용한 forEach문 
let sum = 0;
let number = [20,40,76,80];

number.forEach(xxx); 
// 여기서 console.log(xxx)하면 에러뜸

function xxx(number){
  sum += number;
}

console.log(sum);
// 216

number.forEach( xxx => {
  sum += xxx;
})

console.log(sum);
// 432