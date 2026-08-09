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


/*let name = "My name is Nidhi";
let booleanValue = true;
console.log(num);
let a= 1;
console.log("a value is: " + a );
let array = new Array("pune", "mumbai", "banglore");
console.log(array.length);
for(let i in array)
    {
        console.log(i);
    }
*/