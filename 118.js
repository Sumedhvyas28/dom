const firstButton = document.querySelectorAll(".my-buttons button");


for(let button of firstButton){
    button.addEventListener("click",function(){
        console.log(this.textContent)

    })
}