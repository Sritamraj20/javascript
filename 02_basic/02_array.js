const str="sritams"
console.log(str.lastIndexOf('s'))

const myarr=["sritam","raj"]
console.log(myarr.lastIndexOf("raj"))

const marvelHero=["hulk","ironman","spiderman"]
const dcHero=["batman","wonderwoman","superman"]

// marvelHero.push(dcHero)
// console.log(marvelHero)//here it added array inside an array.

//console.log(marvelHero[3][1])//to access the heros inside array2.

console.log(marvelHero.concat(dcHero))
//this is another way to merge to arrays and here it doesn't add like array inside array.
//push used in existing array but concat need one newarray.
//Spread Operator (...):The spread operator is used to "spread" the elements of an array (or iterable) into another array.
//In this case, it takes all elements from marvelHero and dcHero and combines them into a new array.

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(anotherArray.flat(Infinity))
console.log(anotherArray.flat(0))

console.log(Array.of(1,2,3,4,5,6,6,7))
console.log(Array.isArray())
console.log(typeof Array)
console.log(Array.from("sritam"))