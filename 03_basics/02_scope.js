let a=100
const b=200
var c=30

// console.log(a)
// console.log(b)
// console.log(c)

{}//scope

if(true){
    console.log("hello sritam")
    let a=10
    const b=20
    var c=300

    console.log(a);
    console.log(b);
    console.log(c);
    
    
    
}else{
    console.log("what are you doing.")
}

console.log(a)//global scope
console.log(b)//global scope
console.log(c)//as c is of var type then we can change at anypoint and it will return recent value.
