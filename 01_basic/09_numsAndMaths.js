const score=400

console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

let otherNumber=23.8966
console.log(otherNumber.toPrecision(3))

otherNumber=23.147
console.log(otherNumber.toPrecision(3))

const hundreds=1000000
console.log(hundreds.toLocaleString('en-In'))
console.log(hundreds.toLocaleString('en-US'))//This is particularly useful for displaying data in a way that aligns with a user's cultural or regional preferences.

//_______________Maths____________________//

console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-10))
console.log(Math.round(12.567))
console.log(Math.ceil(12.345))
console.log(Math.floor(12.345))
console.log(Math.random())
console.log(Math.max(2,5))
console.log(Math.min(2,5))
console.log(Math.pow(2,3))
console.log(Math.sqrt(4))
console.log(Math.sin(30))