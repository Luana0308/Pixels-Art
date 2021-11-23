window.onload = setup
let PaletColorsList = document.getElementsByClassName("color");
let black = PaletColorsList[0]
let pink = PaletColorsList[1]
let gold = PaletColorsList[2]
let green = PaletColorsList[3]
let classSelectedName = "selected"

function setup() {
    SetInitialColor()
    clicksConfigure()
    PrintBoard()
}
function SetInitialColor(){
    document.getElementById("cor1").classList.add("selected")
}
function clicksConfigure() {
    black.onmousedown = function () {
        removeAllColors()
        black.classList.add(classSelectedName)
    };
    pink.onmousedown = function () {
        removeAllColors()
        pink.classList.add(classSelectedName)
    };
    gold.onmousedown = function () {
        removeAllColors()
        gold.classList.add(classSelectedName)
    };
    green.onmousedown = function () {
        removeAllColors()
        green.classList.add(classSelectedName)
    };
}
function removeAllColors() {
    pink.classList.remove(classSelectedName)
    gold.classList.remove(classSelectedName)
    green.classList.remove(classSelectedName)
    black.classList.remove(classSelectedName)
}
function PrintBoard(){
for (let index = 0; index < 5; index+=1) {
    let section = document.createElement("section")
    section.id = "pixel-board"
    for (let index = 0; index < 5; index+=1) {
    let butoon = document.createElement("div")
    butoon.onmousedown = function(){
        let selectedColor = document.getElementsByClassName("selected")[0]
        let color = window.getComputedStyle(selectedColor, null).getPropertyValue("background-color")
        console.log(color)
        butoon.style.backgroundColor = color
    }
    butoon.classList.add("pixel") 
    section.appendChild(butoon)
}
    document.body.appendChild(section)
}
}





