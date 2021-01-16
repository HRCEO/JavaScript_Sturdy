//1. Funtion
// 함수는 오브젝트 Object 의 일종이다.
// 하나의 함수는 하나의 일만 하게 작성 하자.
// 함수의 이름은 동사형태로 지정하며, 함수의 목적에 맞는 이름으로 작성한다.
// JavaScript는 함수의 자료형과, 인자의 Tpye이 없어도, 동작이 가능하나 그로인해 함수만을 보고 함수를 이해하기가 어렵다.
// -> 이를 개선하기 위하여 나온것이 TypeScript이다.


//function expression
const print = function (){
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain());

//Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
}

// 스스로를 호출함으로 무한정 반복되는 문제가 있다.
const printNo = function print(){
    console.log('no');
    print();
}

const simplePrint = () =>  console.log('simplePrint!');

const add = (a,b) => a+b;

const addsum = (a,b) =>{   // 함수가 한줄이라면 위와 같이 하면되지만, 괄호를 사용하면, 아래와같이 return 값을 지정해 주어야 한다.
    return a+b;
}

//함수를 선언 하자마자 실행 하고자 한다면, 함수 앞에 ( ) 를 붙히면 된다.
(function hello(){
    console.log('IIFE');
})


function printHello(){
    console.log('Sick');
}
printHello();

//ES6에 추가된 기능, Null check
function showMessage(message, from){
    if(from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Sick - Hello')


function showMessageES6(message, from ='unknown'){
    console.log(`${message} by ${from}`);
}
showMessageES6('Hi')


//Rest parameters ES6  ...을 정의하면, 배열로 값을 받는다 마치 포인터 처럼
function printAll(...args){
    for(let i =0; i< args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg)=> console.log(arg));
}
printAll('dream','coding','sung')

//Local scope
// 전역, 지역 변수의 이론
let globalMessage = 'Global';
function printMessageScope(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessageScope();

//Early return, early exit
//함수내에 예외처리를 가장먼저 실행하고, 함수내에서 코드를 모두다 수행하고 if나 for등으로 코드의 깊이를 늘리지말고 최대한 줄일것
// Bad
function upgradeUser(user){
    if(user.point >10){
        // long upgrade logic...
    }
}
//good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    // long upgrade logic...
}



