/*=============Data Types in JavaScript=================
There are 2 types of Data types in JavaScript
1. Primitive Data Types
2. Non-Primitive Data Types
1. Primitive Data Types: These are the basic data types in JavaScript. They include:
   - Number: Represents numeric values (e.g., 1, 2, 3.14).
   - String: Represents sequences of characters (e.g., "Hello", 'World').
   - Boolean: Represents true or false values.
   - Undefined: Represents a variable that has been declared but has not been assigned a value.
   - Null: Represents the intentional absence of any object value.
   ------------we dont use these below data type in automation-----------
   - Symbol: Represents a unique and immutable value (introduced in ES6).
   - BigInt: Represents integers with arbitrary precision (introduced in ES2020).
2. Non-Primitive Data Types: These are more complex data types that can hold multiple values or objects. They include:
   - Object: Represents a collection of key-value pairs (e.g., { name: "John", age: 30 }).
   - Array: Represents an ordered list of values (e.g., [1, 2, 3, 4]).
   - Function: Represents a reusable block of code that can be called with arguments.*/
console.log("-------------------Number example -------------");

let num = 1;
console.log("num value is: " + num);
console.log(typeof num);


let num1 = 45.67;
console.log("num1 value is: " + num1);
console.log("num1 value is:" ,num1);
console.log(typeof num1);


console.log("-------------------String example -------------");
let name = "Nidhi";
console.log("name value is: " + name);
console.log(typeof name);

let name1 = 'I work in Aztec';
console.log("name1 value is: " + name1);
console.log(typeof name1);

let name2 = `String type 3 way`;
console.log("name2 value is: " + name2);
console.log(typeof name2);
  
console.log("-------------------API testing values -------------");

let APi = ' " name ": " abc " , " Date " : " 12-12-1981 " , "role ": " Admin " ';
console.log("APi value is: " + APi);
console.log(typeof APi);

console.log("-------------------constant example -------------");

const para = "The sun rose over the quiet village, birds chirped happily, and children ran to school, eager to start their day.";
console.log("para value is: " + para);
console.log(typeof para);

console.log("-------------------boolean example -------------");
 let isActive = true;
 console.log("current isActive = ",isActive);
 console.log(typeof isActive);

 console.log("-------------------Undefined example -------------");
 /*If any variable declared wiithout any value then value will be undefined*/
 let undefinedValue;
 console.log("current undefinedValue = ",undefinedValue);
 console.log(typeof undefinedValue);

 console.log("-------------------Null example -------------");
 /*If any variable is assigned the value null, its type will be "object"*/

 let nullValue = null;
 console.log("current nullValue = ",nullValue);
 console.log(typeof nullValue);

 console.log("-------------------Bigint example -------------");

 let value = 123456778899999000000000000000n;
 console.log("value of bigint :" + value);
 console.log(typeof value);

 console.log("-------------------symbol example -------------");

 /* we define object with {} */

let x ={n:1};
console.log("value of symbol :" + x);
console.log(typeof x);

console.log("-------------------end -------------");


