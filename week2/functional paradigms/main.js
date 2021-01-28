let PI = 3.14

//@impure function
    const calculatedArea = (r) => r * r * PI;
// //  the output depended on that global variable 
// //  PI which is not parameters of the function
// //
    calculatedArea(10);



//functional paradigm 
// which the received parameter the out is fixed
const _calculatedArea = (r, P) => r * r * 10;
_calculatedArea(10, 10);


// Example 2
//random number
// function that depends on random number is not pure - Due to the unpredictable result
const randomFunc = (r) => Math.random(r);
randomFunc(10);

//Example 3
let counter = 1;

const increaseCounter = (value)  => {
   return counter = value + 1;
}
// Due to the change value of the parameter. This function is not pure
increaseCounter(counter); // 2
// console.log(counter); // result === 2


//pure function
const _increaseCounter = (value) => value + 1;
//the parameter value is not mutated => PURE FUNCTION 
// console.log(counter);//1
_increaseCounter(counter);//2

//Example 4
let arr = [1, 2, 3, 4, 5];
//use method to interact with arr for keep the old array immutated => PURE FUNC
const incrementArr = (arr) => arr.map(el => el + 1); // map return new arr
incrementArr(arr);// [2, 3, 4, 5, 6]
// console.log(arr);//[1, 2, 3, 4, 5];

//Example 5

//how to handle immutable in iteration
//USE RECURSION => call back the same function
let accumulation = 0;
const sum = (arr, accumulation ) => {
    if(arr.length === 0) {
        return accumulation;
    }
    //splice return new arr => arr is not mutated.
    return sum(arr.splice(1), accumulation + arr[0])
}
// console.log(arr); //[1,2,3,4,5]
// console.log(accumulation);//0
// console.log(sum(arr, accumulation ));//15
//@USE arr.Reduce for the same function
const _sum = (arr) => arr.reduce((accumulation, el) => accumulation + el);
// console.log(_sum(arr));// 15

//Example 6
//covert an input string into url slug
const strText =  '           i am WHO i am          ';
//strText not immutated ==> PURE FUNC

const covertUrlToSlug = (strText) => strText.toLowerCase().trim().split(' ').join('-');

// console.log(covertUrlToSlug(strText));// i-am-who-i-am
// console.log(strText);//               i am WHO i am

//-------------------------------------------------------------------------
//@memoization  function
const sumn = (a, b) => a + b
//because of sum(5,3) always eq 8 => we can replace it by 8
// sum(5, sum(5, 3)) //13 
sumn(5, 8); //13
// ===> same result but better speed;

//Overall memoization convert constant output function 
//[which have same params input] to constant to speed up performance
//-------------------------------------------------------------------------

//@FIRST-CLASS-FUNCTION


const summ = (a, b) => a + b;
const substract = (a, b) => a - b;

const doubleOperator = (f, a, b) => f(a, b) * 2;
//1. function that can be passed in as parameters
doubleOperator(summ, 1, 2)
//2. can be return by another function
const _doubleOperator = () => {
    return () => {
       return summ(1,2) *2; 
    }
}
//3. can be assigned to variable
const firstClassVariable = () => 1+2;
//double operator also called high-order-function
// console.log(firstClassVariable());

//filter (return arr that satisfied condition)
// console.log(arr.filter(el => el > 2)) // [3, 4, 5]


//TEST
function smaller(number) {
    return number < this;
  }
  
  function filterArray(x, listOfNumbers) {
    return listOfNumbers.filter(smaller, x);
  }
  
  let numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];
  
//   console.log(filterArray(3, numbers)); // [2, 1, 0]
//---------------------------------------------------------------------------
//Combine 

let shoppingCart = [
    { productTitle: "Functional Programming", type: "books", amount: 10 },
    { productTitle: "Kindle", type: "eletronics", amount: 30 },
    { productTitle: "Shoes", type: "fashion", amount: 20 },
    { productTitle: "Shoess", type: "fashion", amount: 70 },
    { productTitle: "Shoesss", type: "fashion", amount: 40 },
    { productTitle: "Shoessss", type: "fashion", amount: 30 },
    { productTitle: "Clean Code", type: "books", amount: 60 }
  ]

  const getAmount = (obj) => {
    return obj.filter(el => el.type === 'fashion')
    .map(el => el.amount)
    .reduce((acc,el) => acc + el);
  }

  console.log(getAmount(shoppingCart));



