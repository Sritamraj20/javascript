const myObject={
    jss:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}

// for(const key in myObject){
//     console.log(myObject[key]);
// }object iterations

//console.log(myObject["jss"]);

//for-in loop
const programming=["jss","rb","cpp","java"]
//keys of array starts from 0.

for(const pro in programming){
    console.log(programming[pro]);
}

//like java in javascript map is not iterable so we can't use for-in loop