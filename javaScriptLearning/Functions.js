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
    console.log(a);
}
test4();

console.log("------------------Block Scope example -------------");

if(false){

    let browser = "Chrome";
    const version = "1.0";
    console.log(browser);
    console.log(version);
}
else{
    console.log("Block scope is not accessible outside the block");
}

let c = 100;
console.log("c value is: " + c);

function test5(){
    let c = 200;
    console.log("c value is: " + c);

    if(true){
        let c = 300;
        console.log("c value is: " + c);
    }
    console.log("c value is: " + c);
}
test5();
