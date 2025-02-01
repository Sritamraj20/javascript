const coding=["js","python","java"]

// const values=coding.forEach((item)=>{
//     console.log(item)
// })
//console.log(values)

//for each loop doesn't return anything

const myNums=[1,2,3,4,5]

//but filter returns values
// const values=myNums.filter((item)=>item%2==0)
// console.log(values)

//in the above scenario there is no scope so it returns the value implicitely but if you add scope {} then explicitily mention return statement

// const newNums=myNums.filter((num)=>{
//     return num%2==0//with return output is :[ 2, 4 ] and without return []
// })
// console.log(newNums)

//-----------------MAP---------------------------

// const newNums=myNums.map((num)=>num+10)

// console.log(newNums)

// const newNums=myNums
// .map((num)=>num+10)
// .map((item)=>item+1)
// .filter((num)=>num%2==0)

// console.log(newNums)

//--------------------reduce----------------------------

// accumulator: Stores the accumulated result (like a running total).
// currentValue: The current item being processed.
// index (optional): The index of currentValue.
// array (optional): The original array.
// initialValue: The starting value for accumulator.

let initialValue=10
//const sumValue=myNums.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue)

const sumValue=myNums.reduce((accumulator,currentValue)=>{return accumulator+currentValue},initialValue)


console.log(sumValue)
