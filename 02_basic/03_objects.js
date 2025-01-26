const jsUser={
    name:"sritam",
    "fullName":"sritamraj",
    "full Name":"Mahakul"
}//syntax of user
//Object.create//constructor way to create object
console.log(jsUser.name)

console.log(jsUser["name"])//another way

console.log(jsUser.fullName)
console.log(jsUser["full Name"])
//In JavaScript, object keys can either:Be valid identifiers (like name, fullName, etc.).Be strings (enclosed in quotes, like "full Name" or "some-key").Valid Identifier RulesA valid identifier must:Not contain spaces.Only use letters, digits, $, or _.Not start with a digit.If the key doesn't follow these rules, you must use quotes and access it with bracket notation ([]).

const mySym=Symbol("creating one mahakul")//so here mahakul what i have used is just an description not the value.

const myhero={
    [mySym]:"bhubaneswar"//syntax of using symbol in object
}
console.log(myhero[mySym])

//Object.freeze(jsUser)//freezing the object

console.log(jsUser)

jsUser.greeting=function (){
    console.log(`hello ${this.fullName} the hero!`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting)