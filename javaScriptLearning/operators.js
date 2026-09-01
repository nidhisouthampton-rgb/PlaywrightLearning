/*
1.Arithemetic operators
+,-,*,/%
2.Unary operators
++ --
3.Relational Operators
>,>=,<,<=,!=
Equality operator
------------------------
1.Loose equality ==
2.Strict equality ===

4.Logical Operator
-----------------
1. &&
2. ||
3. !

*/
let num1=10,num2=5;
console.log(num1+num2);
console.log("Addition of num1 & num2 :"+(num1+num2));
console.log("Substraction of num1 & num2 :"+(num1- num2));
console.log("Multiplication of num1 & num2 :"+(num1*num2));
console.log("Division of num1 & num2 :"+(num1/num2));
console.log("Modules of num1 & num2 :"+(num1%num2));

console.log("------Interview Questions------");
console.log(90/0);//Infinity
console.log(-90/0);//-Infinity
console.log("Hello"/0);//NaN (Not a number)
console.log(undefined/6);//NaN
console.log(0/4);//0
console.log(null/5);//0
console.log(0/0);//NaN

/*number representation for null type: Number()
Number() is number constructor
There are 3 types of constructor & its start with capital letter and ().
Number()
String()
Boolean()
Typecasting is changing */

console.log(Number(null));//0 it gives type of number
console.log(Number(undefined));//Nan
console.log(Number(true));//1
console.log(Number(false));//0

console.log("------Unary Operators----------");

/*
    Increment ++
    ===============
    1.PreIncrement        ++num1  num1=num1+1
    --------------------------
    i=1
    value will increment first then use it (++i)=2

    2.PostIncrement       num1++   num1=num1+1
    --------------------------------------
    value will use first then increment


    Decrement --
    ==============
    1.Predecrement     --num1     num1=num1-1
    ----------------------
    value will decrese by 1 first and the use 

    2.Postdecrement    num1--     num1=num1-1
    -------------------------------------------
    value will use first then decrement by 1
*/

let x=100;
console.log(x);//100
console.log(++x);//101

let y=200;
console.log(y);//200
console.log(y++);//200
console.log(y);//201

let a = 50;
let b = a++;
console.log(a);//51
console.log(b);//50

console.log("------------");
let a=190;
let b=a++; //here value will assign first and then increment
console.log(a);//191
console.log(b);//190

let p=587;
let q=p++;
console.log(p);//588
console.log(q);//587

let c=79;
let d=++c;// value will increment first then assign
console.log(c);//80
console.log(d);//80

let i=90;
let j=++i;
console.log(i);//91
console.log(j);//91

let r=65;
let s=r--;
console.log(r);//64
console.log(s);//65

let u=89;
let v=--u;
console.log(u);//88
console.log(v);//88

let x = 5;
let y = (x++ + x++)* (--x) ;
console.log(x);//6
console.log(y);//66

console.log("-------Relational Operators--------");
/*
>,>=,<,<=,!= == ===

Test Data
==========
c=d=80 i=j=91 u=v=88 m=8 n=18 a=191 b=190

*/
console.log("less than <: "+(n<u));//true
console.log("less than equal to <=: "+(v<=u));//true
console.log(a<b);//false
console.log("Greater than > : "+(a>b));//true
console.log("greater than and equal to: "+(j>=d));//true
console.log(d>=c);//true
console.log(j>=a);//false
console.log("Not eqaulity != "+(i!=b));//true
console.log(c!=d);//false

/*
To test equality between numbers or between strings /boolean
we use === strict equality (Recommended)
here original values get compared not type coercion(Type casting)

== Loose Equality(automatic coercion)
--------------------------------------
Value will coerced first and then it get compared.

*/
console.log("100" == 100);//true
console.log(null == undefined);//true

console.log("----------");

console.log("100" === 100);//false
console.log(null === undefined);//false