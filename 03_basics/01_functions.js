function sayMyName(){//syntax
    console.log("s")
}
sayMyName()

function addition(number1,number2){
    return number1+number2
}
// let n=addition(1,2)
// console.log(n)

console.log(addition("sritam","raj"))



const s=addition(1,2)
console.log("result:a"+s)
console.log("result:",s)

//String Concatenation (+ operator) directly combines the string and the value, forming a single string output.
//Comma Separation (,) logs multiple arguments separately, and it will add a space between them in the console.

const add=function sub(num1,num2){
    return num1-num2
}
console.log(add(5,3))//This is how we call function with declaration.

//-------rest-parameter------------//
function mul(...num1){
    return num1
}

console.log(mul(10,20,30))

function mul(val1,val2,...num1){
    return num1
}

console.log(mul(10,20,30,40))