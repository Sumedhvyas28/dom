// change text
// textContent and innerText
const mainHeading= document.getElementById("main-heading")
console.log(mainHeading.textContent)
// show all text even which are hidden 
mainHeading.textContent="hellow new text"
// show all text no hidden text
mainHeading.innerText="hellow new text"

console.log(mainHeading.textContent)