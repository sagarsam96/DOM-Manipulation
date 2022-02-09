const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const violet = document.querySelector(".violet");

const center = document.querySelector(".center");


const getBGColor = (selectedElement) => {
return window.getComputedStyle(selectedElement).backgroundColor;
};


//method to change colour!
const magicColorChanger= (element, color)=>{
    return element.addEventListener("mouseenter", ()=>{
        center.style.background= color;
    });
};

//calling particular color function for each colour
//element and method which got the value of background of the element
magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(violet, getBGColor(violet));


