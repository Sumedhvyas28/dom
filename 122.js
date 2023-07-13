// event bubling
// c                           b
//     c                   b
//         c           b
//             c  b 

const grandParent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")

// capturing
// child.addEventListener("click",()=>{
//     console.log("capture !!!! bubling")
// },true)
// parent.addEventListener("click",()=>{
//     console.log("capture !!!! parent event")
// },true)
// grandParent.addEventListener("click",()=>{
//     console.log("capture !!!!grandparent event")
// },true)
// document.body.addEventListener("click",()=>{
//     console.log("capture !!!! body event")
// },true)

// not capturing

// child.addEventListener("click",()=>{
//     console.log("bubling ??? child event") 
// })
// parent.addEventListener("click",()=>{
//     console.log("bubling ??? parent event")
// })
// grandParent.addEventListener("click",()=>{
//     console.log("bubling ??? grandparent event")
// })
// document.body.addEventListener("click",()=>{
//     console.log("bubling ??? body event")
// })

