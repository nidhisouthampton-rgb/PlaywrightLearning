/*
Functions
First declaration then expression
--------------------------
1.Function Declaration: A function declaration is a named function that is defined using the function keyword. It can be called before its declaration due to hoisting.
 
Function test1(){
    console.log("This is a function declaration");
}
call test1(); // This will work because of hoisting


--------------------------------------------------------
1.Anonymous function is a function that does not have a name. It can be assigned to a variable or passed as an argument to another function.

function()=> {"My name is Nidhi"};

*/


console.log("-------------------Function Declaration example -------------");

function test1(){

    console.log("This is a function declaration");
}
test1();

console.log("-------------------Function Expression example -------------");

var test2 = function(){

    console.log("This is Anonymous function expression");
};
test2();

console.log("-------------------Function arrow example -------------");

let test3 = () => {

    console.log("This is arrow function")
};
test3();

let test4 = () =>{

    let a= 10;
    console.log(b);
}
test4();