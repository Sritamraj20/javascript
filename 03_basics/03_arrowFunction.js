//Arrow-function and this keyword

// function chai(){
//     console.log(this);
// }
// chai()//this works only with objects not in functions.

const ob={
    name:"himalaya",
    age:Infinity,
    height:8846,
    greeting:function(){
        //console.log(`i am a hero of ${this.name}`);
        
        console.log(this);
    }
}
ob.greeting()

//console.log(this)//{} because this is run on node not in browser if it's a browser then it would have window object.

const chai=()=>{
    let username="sritam"
    console.log(this);
}
chai()

//Arrow function
const addTwo=(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(1,2))

const addThree=(num1,num2,num3)=>(num1+num2+num3)
console.log(addThree(1,2,3))

const objectReturn=(num1,num2)=>({name:"kanchenjhunga"})
console.log(objectReturn(3,4))
//in order to return object we need to add () paranthesis before curlybraces.

const myArr=[1,2,3,4,5]

myArr.forEach((a)=>console.log(a))
myArr.forEach((num)=>{
    let o=num+1
    console.log(o);
})