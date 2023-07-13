// practice 


const myButtons=document.querySelectorAll(".my-buttons button")

// for(let button of myButtons){
//     button.addEventListener("click",function(){
//         button.style.backgroundColor="yellow"
//         button.style.color="grey"
//     })
// }

myButtons.forEach(button=>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor="yellow"
        e.target.style.color="grey"
    })
})