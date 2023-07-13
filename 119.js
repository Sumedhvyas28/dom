// event object 

// browser give info in argument of our function 
const firstButton=document.querySelectorAll(".my-buttons button")



for(let button of firstButton){
    button.addEventListener("click",(e)=>{
        console.log(e.target)
    })
}