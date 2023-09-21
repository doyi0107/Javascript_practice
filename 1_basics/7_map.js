var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function(v, i, arr) {
  return v + 1;
});
console.log(newArr);



let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];


let userFullnames = users.map(function(element){
    return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames);
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]


let array = [2, 3, 5, 7]

// map() 메소드의 this 인수에 숫자 값 할당   
array.map(function(element, index, array){
	console.log(this) 
}, 80);
// [Number: 80]
// [Number: 80]
// [Number: 80]
// [Number: 80]

// 값을 확인하기 위한 인수 로깅
array.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);
// 2
// 0
// [ 2, 3, 5, 7 ]
// 3
// 1
// [ 2, 3, 5, 7 ]
// 5
// 2
// [ 2, 3, 5, 7 ]
// 7
// 3
// [ 2, 3, 5, 7 ]