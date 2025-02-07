if(NaN){
    console.log("print");
}else{
    console.log("here");
}

//falsy values 0,false,NaN,null,"",undefined,BigINt,-0
//truthy values [],{},function(){}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

if(undefined){
    console.log("I am here inside");
}

//Nullish coalescing operator(??):null undefined

let val1;
val1=5??10
//val1=null??5
//val1=undefined??10
//val1=null??100??10

console.log(val1);

//Terniary operator

//condition?true:false

const iceTeaPrice=100

iceTeaPrice>=80?console.log("yes"):console.log("no");


