console.log("sritam"+" mahakul")

const goodName="sritam"
console.log(`my name is ${goodName}`)

let gameName=new String('sritamraj')//create one string object

console.log(typeof gameName)
console.log(gameName[0])

console.log(gameName.length)
console.log(gameName.charAt(1))
console.log(gameName.toUpperCase())//only changed the value
console.log(gameName)
console.log(gameName.indexOf('s'))
let backStick=`backStick`//it's also a string
console.log(backStick)
console.log(typeof backStick)

let newString=gameName.substring(1,4)//sritam
console.log(newString)

let anotherString=gameName.slice(-8,4)
console.log(anotherString)
//If the startIndex is greater than or equal to the endIndex, the slice method will return an empty string because there are no characters to extract in that range. In this case, -1 (the last character) is logically after 4 (the 5th character when counting from the start).

gameName="sritamraj  "
console.log(gameName.length)
//console.log(gameName.trim())
let len=gameName.trim()
console.log(len.length)
console.log(gameName.endsWith('j'))

const url="https://sritamraj20.github.io/Portfolio/"

console.log(url.replace("20","30"))
//console.log(url.replaceAll('i','u')) //replaces all simillar characters
console.log(url.replace('i','u'))//replaces the first character if finds

console.log(gameName.includes("sri"))
console.log(gameName.includes('r'))

let myName="sritam raj Mahakul"
const arr=myName.split(" ")
console.log(typeof arr)
console.log(arr)
console.log(arr[0])