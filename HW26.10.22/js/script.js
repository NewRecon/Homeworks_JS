// task 1
function task1(str) {
    let letterCounter = 0;
    let numberCounter = 0;
    let symbolCounter = 0;
    for (let i of str) {
        if (i >= 'a' && i <= 'z' || i >= 'A' && i <= 'Z') letterCounter++;
        else if (i >= 0 && i <= 9) numberCounter++;
        else symbolCounter++;
    }
    console.log(letterCounter, numberCounter, symbolCounter);
}

// task 2
function task2(num) {
    if (num<10 && num>0 || num >= 20) {
        let a = Math.trunc(num/10);
        let b = num%10;
        let arrayDecimal = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
        let arrayNumber = ["один","два","три","четыре","пять","шесть","семь","восемь","девять"];
        if (a!=0 && b!=0) {
            console.log(arrayDecimal[a-2],arrayNumber[b-1]);
        }
        else if (a==0 && b!=0) {
            console.log(arrayNumber[b-1]);
        }
        else console.log(arrayDecimal[a-2]);
    }
    else if (num>=10 && num < 20) {
        let b = num%10;
        let arrayDecimal = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
        console.log(arrayDecimal[b])
    }
    else if (num == 0) console.log("ноль");
    else console.log("error input");
}

// task 3
function task3(str) {
    let result = "";
    for (let i of str) {
        let tmpStr = i;
        if (tmpStr >= 'A' && tmpStr <= 'Z') tmpStr = tmpStr.toLocaleLowerCase();
        else if (tmpStr >= 'a' && tmpStr <= 'z') tmpStr = tmpStr.toLocaleUpperCase();
        else if (tmpStr >= 0 && tmpStr <= 9) tmpStr = "_";
        result+=tmpStr;
    }
    console.log(result);
}

// task 4
function task4(str) {
    let result = "";
    let flag = true;
    for (let i of str) {
        if (!flag) {
            result += i.toLocaleUpperCase();
            flag = true;
        }
        else if (i != "-") {
            result += i;
        }
        else flag = false;
    }

    console.log(result);
}

// task 5
function task5(str) {
    let result = "";
    let flag = true;
    for (const i of str) {
        if (flag) {
            result+=i;
            flag = false;
        }
        else if (!(i>='a' && i<='z') && !(i>='A' && i<='Z') && !(i>='а' && i<='я') && !(i>='А' && i<='Я')) flag = true;
    }
    result = result.toUpperCase();
    console.log(result);
}

// task 6
function task6(...args) {
    let result = "";
    for (let i of args) {
        result += i;
    }
    return result;
}

// task 7
function task7(str) {
    let a = "";
    let operator = "";
    let b = "";
    let flag = true;
    for (const i of str) {
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
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            if (b!=0) return a/b;
    }
}

// task 8
function task8(url) {
    let protocol = url.substring(0, url.indexOf(":"));
    let domen = url.substring(url.indexOf(":")+3, url.indexOf("/",url.indexOf(":")+3));
    let path =url.substring(url.indexOf("/",url.indexOf(":")+3));
    console.log(protocol, domen,path)
}

// task 9
function task9(str, div) {
    let strings = [];
    let index = 0;
    let tmp="";
    for (const i of str) {
        if (i != div) tmp+=i;
        else {
            strings.push(tmp);
            index++;
            tmp = "";
        }
    }
    strings.push(tmp);
    return strings;
}

// task 10
function task10(str, ...args) {
    // let result = str.substring(0,str.indexOf("%"));
    let result = "";
    // let index = 1;
    let tmpArray = [];

    let flag = true;

    for (const i of args) {
        tmpArray.push(i);
    }
    for (const i of str) {
        if (i=='%') flag = false;
        else if (!flag) {
            result+=tmpArray[i-1];
            flag=true;
        }
        else result+=i;
    }
    console.log(result);
}