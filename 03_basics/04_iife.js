//immediately invoked function expressions(IIFE)

(function chai(){
    console.log(`db connected`)
})();
//To prevent the pollution happens due to global scope we use IIFE it's just like (chai)() == ()()

((name)=>{
    console.log(`db two ${name}`)
})('sritam')

