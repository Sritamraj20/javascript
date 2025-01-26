
//In JavaScript, when you declare an object with const, it means that the reference to the object is constant, not the object itself. This means you cannot reassign the object to a different value, but you can still modify its properties.

const tinderObject=new Object()
console.log(tinderObject)
tinderObject.id=12
console.log(tinderObject)

const tinder={
    name:"mahakul"
}

// tinder={
//     name:"sritam"
// }This is not possible

tinder.name="raj"//This is possible

const obj1={1:"Sritam",2:"raj"}
const obj2={3:"mahakul",4:"i am"}

//const obj3={obj1,obj2}
//console.log(obj3)

//const obj3=Object.assign(obj1,obj2)
//console.log(obj3)
const obj3=Object.assign({},obj1,obj2)//This is a good way to write or merge 2 objects.
console.log(obj3)