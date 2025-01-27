//MAPS

const map=new Map()
map.set('odisha','bhubaneswar')

//console.log(map.get('odisha'))
//map.forEach((state)=>console.log(state))

for(const [key,value] of map){
    console.log(key," ",value);
}

// const obj={
//     state:"odisha",
//     city:"bhubaneswar"
// }

// for(const [key,value] of obj){
//     console.log(key," ",value);
// }//object is not iterable
