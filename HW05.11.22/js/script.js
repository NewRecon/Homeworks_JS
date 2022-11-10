let menuButton = document.getElementsByClassName("menu-button")[0];
let buttonTop = menuButton.getElementsByClassName("line-top")[0];
let buttonCenter = menuButton.getElementsByClassName("line-center")[0];
let buttonBottom = menuButton.getElementsByClassName("line-bottom")[0];
let menu = document.getElementsByClassName("menu")[0];
let menuList = document.querySelectorAll("li");

console.log(menuList);

if (menuButton.addEventListener("click", function() {
    buttonTop.classList.toggle("active");
    buttonBottom.classList.toggle("active");
    buttonCenter.classList.toggle("active");
    menu.classList.toggle("show");
}));

for (let el of menuList) {
    let child = el.getElementsByTagName('ul');
    console.log(child);
    if (child.length != 0) el.classList.add("plus");
}

let button1 = document.getElementsByTagName("button")[0];
let button2 = document.getElementsByTagName("button")[1];
let drop1 = document.getElementsByClassName("drop")[0];
let drop2 = document.getElementsByClassName("drop")[1];

button1.addEventListener("click", function(){
    drop1.classList.toggle("active");
    menuList[0].classList.toggle("plus");
    menuList[0].classList.toggle("minus");
})

button2.addEventListener("click", function(){
    drop2.classList.toggle("active");
    menuList[4].classList.toggle("plus");
    menuList[4].classList.toggle("minus");
})