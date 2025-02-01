const coding=["js","ruby","java","python","cpp"]

//callback function doesn't have name.
// coding.forEach(function (item){
//     console.log(item)
// })

//coding.forEach((item)=>console.log(item))

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item,index,array)=>{
//     console.log(item,index,array)
// })


const myCoding=[
    {
        languageName:"java",
        fileName:"java"
    },
    {
        languageName:"javaScript",
        fileName:"js"
    },
    {
        languageName:"python",
        fileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})