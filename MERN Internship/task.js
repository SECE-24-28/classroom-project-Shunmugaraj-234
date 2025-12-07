let headingTag = document.getElementById("heading");
console.log(headingTag);

let btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("click" , (event) => {
    headingTag.style.color = "red";
});

let paragraphs = document.getElementsByClassName("paragraphs");
let colourChangeParas = document.getElementById("changeColorToAllPara");
console.log(paragraphs);

colourChangeParas.addEventListener("click" , (event) => {

    for(let element of paragraphs){
        element.style.color = "green";
    }
});


//Changing Text 
let textChange = document.getElementById("textChange");
let textChangeBtn = document.getElementById("textChangeBtn");

textChangeBtn.addEventListener("click", (event) => {
    textChange.innerHTML = "Hello World";
});

//Add Element and Remove Element
let addElement = document.getElementById("addElement");
let addElementBtn = document.getElementById("addElementBtn");

addElementBtn.addEventListener("click" , (event) => {
    let newElement = document.createElement("p");
    newElement.innerHTML = "This element added after button click."
    addElement.append(newElement);
});

let removeElementBtn = document.getElementById("removeElementBtn");
removeElementBtn.addEventListener("click" , (event) => {
    addElement.innerHTML = "";
});


