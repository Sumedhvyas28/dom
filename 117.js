// this keyword

const btn =document.querySelector(".btn-headline")


// button itself a value in this keyword for normal function 

// btn.addEventListener("click",function(){
//     console.log("clickeme")
    
//     console.log(this)
// })



// in arrow window will be the result of this keyword 
btn.addEventListener("click",()=>{
    console.log("clickeme")
    console.log(this)
})