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

function scope(){
    let a="scope"

    function insideScope(){
        let inside="scopeinside"
        console.log(a)
        console.log(inside)
    }
    //console.log(inside);gives error as it's out of scope.
    insideScope()
    
}
scope()


//if-else scope

if(true){
    let highest="himalaya"
    if(highest==="himalaya"){
        console.log(highest);
        let lowset="alps"
    }
    //console.log(lowset);//out of scope

}
//console.log(highest);


pehleAccess()//without even function signature here i am able to access the function.
function pehleAccess(){
    console.log("I can access pehle"); 
}

// dekhtahu()//can't access before initialization
// const dekhtahu=function nehniHoRahaHai(){
//     console.log("I can't access before");
// }