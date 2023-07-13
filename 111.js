// traversing full dom tree 
// parent = document => child html => subchild=> head text body


// const rootNode=document.getRootNode()
// const htmlElementNode=rootNode.childNodes[0]
// console.log(htmlElementNode.childNodes) // head text body
// const headElement=htmlElementNode.childNodes[0]
// const textElement=htmlElementNode.childNodes[1]
// const bodyElement=htmlElementNode.childNodes[2]
// console.log(headElement.nextSibling)
// console.log(headElement.childNodes)
// console.log(bodyElement.childNodes)
// console.log(headElement)








const heading=document.querySelector("h1")
// console.log(heading)
const parent =(heading.parentElement.parentElement) 
parent.style.backgroundColor="#333"