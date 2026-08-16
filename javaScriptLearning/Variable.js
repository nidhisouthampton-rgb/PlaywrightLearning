/* 
----------------------------------VARIABLES-------------------------------
Variables are containers for storing data values. In JavaScript, you can declare a variable using the var, let, or const keyword. The let and const keywords were introduced in ES6 (ECMAScript 2015) and are now the preferred way to declare variables.


Syntax:
Keyword variableName = value;
Let a = 10;

----------------------------------

1. var: The var keyword is function-scoped and can be redeclared and updated. 
-------------------------------------------
-Scope : Function-scoped & Global
-Var is hoisted 
-Var redeclaration and reassignment is allowed
-----------------------------------------------------------------

2. let: The let keyword is block-scoped 
----------------------------------------------
-Scope : Block-scoped & Global
-Var is used for mutable data (which can be changed)
-Var redeclaration is not allowed
-Var reassignment is allowed
----------------------------------------------------------------

3. const: The const keyword is also block-scoped 
---------------------------------------
-Scope : Block-scoped & Global
-Var is used for Immutable data (which cannot be changed)
-Var redeclaration is not allowed
-Var reassignment is not allowed
- If you declare a const variable, you must initialize it with a value at the time of declaration.
- If you access variable before declaration then it will give ReferenceError

------------------------------------------------------

SCOPES
-----------------------

1. Global Scope: 
-------------------------------------
A variable declared outside of any function or block and inside JS file has global scope. It can be accessed from anywhere in the code.

2. Function Scope: 
------------------------------------------------
A variable declared inside a function has function scope. It can only be accessed within that function.

3. Block Scope: (only applicable for let and const)
---------------------------------------------------
A variable declared inside a block(if() ,For() ,while () block) (e.g., inside curly braces {}) has block scope. It can only be accessed within that block.


*/
console.log("------Global Scope-------");
var a = 10;
let name = "Nidhi";
const temp = 25.2;

console.log(a);//10
console.log(name);//Nidhi
console.log(temp);//25.2

console.log("-------------Global data from functions---------------");