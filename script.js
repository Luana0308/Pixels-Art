window.onload = incialColor()

function incialColor(){
    document.getElementById("cor1").classList.add("selected")
}

let PaletColorsList = document.getElementsByClassName("color");
let black = PaletColorsList[0]
let pink = PaletColorsList[1]
let gold = PaletColorsList[2]
let green = PaletColorsList[3]
let classSelectedName = "selected" 

black.onmousedown = function () {
    black.classList.add(classSelectedName)
    pink.classList.remove(classSelectedName)
    gold.classList.remove(classSelectedName)
    green.classList.remove(classSelectedName)
};
pink.onmousedown = function () {
    pink.classList.add(classSelectedName)
    black.classList.remove(classSelectedName)
    gold.classList.remove(classSelectedName)
    green.classList.remove(classSelectedName)
};
gold.onmousedown = function () {
    gold.classList.add(classSelectedName)
    black.classList.remove(classSelectedName)
    pink.classList.remove(classSelectedName)
    green.classList.remove(classSelectedName)
};
green.onmousedown = function () {
    green.classList.add(classSelectedName)
    black.classList.remove(classSelectedName)
    pink.classList.remove(classSelectedName)
    gold.classList.remove(classSelectedName)
};


