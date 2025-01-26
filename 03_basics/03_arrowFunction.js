//Arrow-function and this keyword

// function chai(){
//     console.log(this);
// }
// chai()//this works only with objects not in functions.

const ob={
    name:"himalaya",
    age:Infinity,
    height:8846,
    greeting:function(){
        //console.log(`i am a hero of ${this.name}`);
        
        console.log(this);
    }
}
ob.greeting()

//console.log(this)//{} because this is run on node not in browser if it's a browser then it would have window object.