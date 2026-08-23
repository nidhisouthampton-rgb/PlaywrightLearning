/*let name = "anyName";

let name1 = () => { 
    let a = 3444;
    console.log(a) };
name1();*/

function testScope() { 
    //const a = 30;
    let d= 40;
    console.log(d);
if (true) { 
var a = 10; 
let b = 20; 
//console.log(a); 
} 
console.log(a);  
//console.log(b); 
} 
testScope();

if (true) { 
var a = 10; 
let b = 20;
const c= 50; 
//console.log(a); 
} 
console.log(a);
console.log(b);
console.log(c);