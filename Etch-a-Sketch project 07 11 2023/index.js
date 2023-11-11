const smallEl = document.getElementById("small-el")
const mediumEl = document.getElementById("medium-el")
const largeEl = document.getElementById("large-el")
const clearEl = document.getElementById("clear-el")
const blackEl = document.getElementById("black-el")
const rainbowEl = document.getElementById("rainbow-el")

const containerEl = document.getElementById("container")
const createdDiv = document.getElementsByClassName("grid")

small()

smallEl.addEventListener("click", function() {
    removeEl()
    small()
    
})

mediumEl.addEventListener("click", function(){
    removeEl()
    medium()
})

largeEl.addEventListener("click", function(){
    removeEl()
    large()
})

clearEl.addEventListener("click", function(){
    removeEl()
    small()
})

function small(){
    containerEl.style.gridTemplateColumns = "repeat(16 , 1fr)"
    containerEl.style.gridTemplateRows = "repeat(16 , 1fr)"
    for(let i = 0; i < 256; i++) {
        makeNew()
}}

function medium(){
    containerEl.style.gridTemplateColumns = "repeat(24 , 1fr)"
    containerEl.style.gridTemplateRows = "repeat(24 , 1fr)"
    for(let i = 0; i < 576; i ++) {
        makeNew()
    }
}

function large(){
    containerEl.style.gridTemplateColumns = "repeat(34 , 1fr)"
    containerEl.style.gridTemplateRows = "repeat(34 , 1fr)"
    for(let i = 0; i < 1156; i ++) {
        makeNew()
    }
}

function makeNew() {
        let gridElements = document.createElement("div")
        gridElements.classList.add("grid")
        containerEl.appendChild(gridElements)
        gridElements.addEventListener('mouseover', function(e) {
            gridElements.style.backgroundColor = 'black';
        })
}


function removeEl(){
    while (containerEl.firstChild) {
        containerEl.removeChild(containerEl.firstChild);
      }
}




// function black(){
//     createdDiv.addEventListener("mouseover", () => {
//         createdDiv.style.backgroundColor = "black"
//     })
//     createdDiv.style.backgroundColor = "aliceblue"
//     }
//     createdDiv.onmouseover = function color() {
//     this.style.backgroundColor = 'black'
// }
// addEventListener("dblclick", function(){

// })


// createdDiv.addEventListener("mouseenter", function mouseover() {
//     createdDiv.style.backgroundColor = "black"
// })

// document.querySelectorAll("grid").addEventListener("mouseenter", function() {
// document.querySelectorAll("grid").style.backgroundColor = "black"})

