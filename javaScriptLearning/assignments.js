/*Assignment on DataTypes,Variable and Operators
1. Identify the Data Type 
Write a program to declare the following variables and log 
their data types: 
let a = "Hello"; 
let b = 100; 
let c = true; 
let d = null; 
let e = undefined; 
let f = { name: "John" }; 
let g = [1, 2, 3]; 
let h = function() { 
}; */

console.log("----------------First Programme-------------------");

let a = "Hello";
console.log("Value of a is:", a);
console.log("Data type of a is:", typeof a);

console.log("----------------second Programme-------------------");

let b = 100;
console.log("value of b is :",b);
console.log("Data type of b is :",typeof b);

console.log("----------------Third Programme-------------------");

const c= true;
console.log("value of c is :",c);
console.log("data type of c is :",typeof c);

console.log("----------------Fourth Programme-------------------");

let d = null;
console.log("value of d is :",d);
console.log("data type of d is :",typeof d);


console.log("----------------Fifth Programme-------------------");

let e = undefined; 
console.log("value of e is :",e);
console.log("data type of e is :",typeof e);

console.log("----------------Sixth Programme-------------------");

let f = { name: "John" }; 
console.log("value of f is :",f);
console.log("data type of f is :",typeof f);

console.log("----------------Seventh Programme-------------------");

let g = [1, 2, 3]; 
console.log("value of g is :",g);
console.log("data type of g is :",typeof g);

console.log("----------------Eighth Programme-------------------");

let h = function() { 
}; 
console.log("value of h is :",h);
console.log("data type of h is :",typeof h);

/*2. Variable Scope Check 
What will be the output of the following? 
var x = 10; 
function test() { 
var x = 20; 
console.log(x); 
} 
test(); 
console.log(x); */

var x = 10; 
//because this is global variable.
function test() { 
var x = 20; 
//this is functional scope as variable declared inside the function
console.log(x); 
// so it will print 20 here as x variable defined inside the function.
} 
test(); 
console.log(x);
//here it will print 10 because this is calling from global scope

/*3. Hoisting Example 
Predict the output and explain: 
console.log(a); 
var a = 5; 
*/ 

console.log(a); //here a value will be printed as undefined .Because vaer is fully hoisted and calling before declaration
var a = 5;

/*4. Let vs Var 
What will be the output? 
function testScope() { 
if (true) { 
var a = 10; 
let b = 20; 
} 
console.log(a); // ? 
console.log(b); // ? 
} 
testScope(); */ 

function testScope() { 
let a = 20;
var b = 30;
const c=40; 
console.log(b);
} 

testScope();