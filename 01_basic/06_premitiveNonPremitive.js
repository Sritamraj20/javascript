//premitive(call by value):- 7 categories(String,Numbers,Boolean,null,undefined,symbol,bigInt)
//nonPremitive(call by reference):- Arrays,Objects,Functions.
//it's a dynamicTypedLanguage.

const id=Symbol('123')
const anotherId=Symbol('123')

console.table([id,anotherId])
console.log(id===anotherId)

//JavaScript does not compare memory locations directly; for objects, it checks whether two variables reference the same object in memory.

const heros=["shaktiman","nagraj","doga"]//Array

let obj={//Object
    name: "sritam",
    age: 26
}

const myFunction=function (){
    console.log("hello internet!")
}//function in js