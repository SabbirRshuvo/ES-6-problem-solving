// let and const declaration
const add = (num1, num3) => num1 + num3;
const sum = add(34, 54);
console.log(sum);

// second 2 problem 
const hubby = 'shahriar alam';
let phone = 'samsung galaxy s22';
phone = 'xiaomi';

// 2. template string 
const temNotes = `i am sabbir ${hubby} . i have a ${phone}.`
// console.log(temNotes);

// fist and second problem solved
const names = {first: 'sabbir',  second: 'rahman'};
let phones = 'samsung';
phones= 'iphe';

const templete = `my first name is: ${names.first}, my second name is : ${names.second} `;
console.log(templete);

// 3 number problem 
const arrowFunction = (a, b) => a*b;
let total = arrowFunction(34, 2);
console.log(total);


// number 4 problem 
const problemFour = num1 => num1 / 5;
total = problemFour(10);
console.log(total);

// number 5 problem 
const problemFive = (num1, num2) => (num1 + num2);
total = problemFive(5, 10);
const result = total ** 2;
console.log(result);

// number 6 problem 
const problemSix = (num1, num2, num3) =>(num1 *num2 * num3);
total = problemSix(5, 7, 2);
console.log(total);


// number 7 problem solve
const problemSeven = (x,y) =>{
    const sum = x+ y;
    const diff = x- y;
    const result = sum * diff;
    const total = result * 5;
    return total
}
const subTotal = problemSeven(23, 2);
console.log(subTotal);


// number 8 problem solve function declare
function addNumber (num2, num5){
    return num2 + num5;
}
const sssum= addNumber(34, 64);
console.log(sssum);

// number 8 problem solving second part declare arrow funciton

const numbers = (num3, num4) => (num3+ num4);
const totalSum = numbers(34, 64);
console.log(totalSum);


// number 9 problem solving
const numberArray = [10,23, 43, 12, 54, 63,73];
const getEachElement = numberArray.map(numberArray =>numberArray *5);
console.log(getEachElement);

// number 9 problem solving extra for learning
// const product = [
//     {name: 'smartphone', price: 12340, color: 'white'},
//     {name: 'smart watch', price: 2340, color: 'black'},
//     {name: 'pc', price: 23440, color: 'white'},
//     {name: 'iphone', price: 123240, color: 'white'},
//     {name: 'note', price: 40, color: 'white'}
// ];

// const wantToSeeName = product.map(product =>product.name);
// const wantToSeePrice = product.map(product =>product.price);
// console.log(wantToSeeName, wantToSeePrice);


// number 10 problem solving
const numberOfAray = [21, 2, 3, 5, 7, 22, 10, 20];
const getOddNumbers = numberArray.map(numberArray=>numberArray/ 2 == 1);
console.log(getOddNumbers);


// number 11 problem solving