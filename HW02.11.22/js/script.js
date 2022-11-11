let field = document.getElementsByClassName("calc__field")[0];
let buttonNumBox = document.getElementsByName("num");

for (let i=0;i<buttonNumBox.length;i++) {
    buttonNumBox[i].addEventListener("click", function(){
        if (field.textContent==0) field.textContent = buttonNumBox[i].value;
        else field.textContent += buttonNumBox[i].value;
    })
}

function sum() {
    if (ckeck()) field.textContent += '+';
}

function div() {
    if (ckeck()) field.textContent += '-';
}

function mult() {
    if (ckeck()) field.textContent += '*';
}

function dif() {
    if (ckeck()) field.textContent += '/';
}

function result() {
    let a = "";
    let operator = "";
    let b = "";
    let flag = true;
    for (const i of field.textContent) {
        if (i=='+' || i=='-'|| i=='*'|| i=='/') {
            flag = false;
            operator = i;
        }
        else if (flag) a += i;
        else b += i;
    }
    b = Number(b);
    a = Number(a);
    switch(operator) {
        case "+":
            field.textContent = a+b;
            break;
        case "-":
            field.textContent = a-b;
            break;
        case "*":
            field.textContent = a*b;
            break;
        case "/":
            if (b!=0) field.textContent = a/b;
            break;
    }
}

function clr() {
    field.textContent = 0;
}

function ckeck() {
    for (const i of field.textContent) {
        if (i == '+' || i == '-' || i == '*' || i == '/') return false;
    }
    return true;
}
