const myArr=[0,1,2,3,4,5,true,"sritam"]//syntax for array

console.log(myArr[0])
console.log(myArr[6])

const myhero=new Array(1,2,3,4)
console.log(myhero[4])//index is out of bound but array in js is resizable so it's showing undefined.
console.log(myhero[3])

console.log(myhero.push(5))//it adds at the end of the array
console.log(myhero)

console.log(myhero.pop())//it removes the last element

myhero.unshift(10)//adds element at first of array
console.log(myhero)
myhero.shift() // removes element from first of array
console.log(myhero)

console.log(myhero.includes(4))
console.log(myhero.indexOf(4))

const newArr=myhero.join()//it converts the array to string
console.log(typeof newArr)