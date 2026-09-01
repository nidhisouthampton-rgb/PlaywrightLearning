/*
If-else: validate true and false condition
only 1 codition to validate
*/

//validate number if even or odd

let num=13;

if(num%2===0)
{
    console.log(num+" is even Number");
    
}else
{
    console.log(num+" is odd number");
    
}

//API status code validation
//post()---->create resource :201

let statusCode=201;

if(statusCode===201)
{
    console.log("POST call is completed!");
    
}else
{
    console.log("POST call is Failed!");
    
}


console.log("---------");

let responseCode=340;

//successfull code: 200 - 299 range

if(responseCode>=200 && responseCode<=299)
{
console.log("This is successfull response");

}
else{
    console.log("This is unsuccessfull response");
    
}

let actualUrl = "www.amazon.co.uk";
let expectedUrl = "ww.amazon1.co.uk";
if (actualUrl===expectedUrl){
    console.log("actual and expected url matched");
}
else{
    console.log("actual and expected url not matched");
}

if(actualUrl.includes("www")=== expectedUrl.includes("www")){
    console.log("actual and expected url contains protocol");
}
else{
    console.log("actual and expected url  not contains protocol");
}