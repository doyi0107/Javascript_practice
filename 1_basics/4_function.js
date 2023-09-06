function calculate(number) {
    console.log((number * 10 / 2 % 2));
}

calculate(4);


// 함수에서 입력받는 값에 대한 정의는 parameter - number
// 실제 입력하는 값은 argument라고 한다. - 4 

 
function multply(x , y) {
    return x * y
}

const result1 = multply(2,4);
console.log(result1);

// arrow 함수 , 화살표 함수 

const multply2 = (x,y) => {
    return x * y;
}

console.log(multply2(2,5));

const multply3 = (x,y) => x*y;
console.log(multply3(100,200));

const multply4 = x => x*215;
console.log(multply4(5));

const multplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a,b) => a*b ,1 );
}

console.log(multplyAll(2,3,4,5,6,7,8));
