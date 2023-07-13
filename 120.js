const allButton =document.querySelectorAll(".my-buttons button")



allButton.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget.textContent)
    })
})