//heap and stack memory
let goodName="sritam"
let anotherName=goodName

console.log(goodName)
console.log(anotherName)

anotherName="dipu"
console.log(goodName)
console.log(anotherName)

let userOne={
    email:"sritam@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne

console.log(userOne)
console.log(userTwo)

userTwo.email="sritam@google.com"

console.log(userOne.email)
console.log(userTwo.email)