// task 1
const eag = {
    title: "eag",
    count: 10,
    status: false
};
const bread = {
    title: "bread",
    count: 2,
    status: false
};
const milk = {
    title: "milk",
    count: 1,
    status: true
};
const cheese = {
    title: "cheese",
    count: 1,
    status: false
};
let productList = [];

productList.push(eag);
productList.push(bread);
productList.push(milk);
productList.push(cheese);

function showProductList(productList) {
    let tmpListTrue = [];
    let tmpListFalse = [];
    productList.forEach(function(element){
        if (element.status) tmpListTrue.push(element);
        else tmpListFalse.push(element);
    })
    tmpListFalse.forEach(function(element){
        console.log(element);
    })
    tmpListTrue.forEach(function(element){
        console.log(element);
    })
}

function addProductInList(productList, product) {
    let flag = true;
    productList.forEach(function(element){
        if (element.title == product.title && element.status == product.status) {
            element.count += product.count;
            flag = false;
        }
    })
    if (flag) productList.push(product);
}

function purchaseProduct(productList, product) {
    let flag = true;
    productList.forEach(function(element){
        if (element.title == product.title && element.status == false) {
            element.status = true;
            flag = false;
        }
    })
    if (flag) {
        product.status = true;
        addProductInList(productList, product);
    }
}

// task 2
const butter = {
    title: "butter",
    count: 1,
    price: 80
};
const cheaps = {
    title: "cheaps",
    count: 2,
    price: 170
};
const tea = {
    title: "tea",
    count: 1,
    price: 300
};
const cookies = {
    title: "cookies",
    count: 2,
    price: 150
};

let check = [butter,cheaps,tea,cookies];

function printCheck(check) {
    check.forEach(function(element){
        console.log(element);
    })
}

function countFinalPrice(check) {
    let result = 0;
    check.forEach(function(element){
        result += element.price * element.count;
    })
    return result;
}

function findeMaxPriceProduct(check) {
    let result = check[0].price;
    check.forEach(function(element){
        if (result<element.price) result = element.price;
    })
    return result;
}

function findeMaxPriceProduct(check) {
    let result = 0;
    let count = 0;
    check.forEach(function(element){
        result += element.price;
        count++;
    })
    return result/count;
}

// task 3
const cssColor = {
    name: "color",
    value: "green"
}
const cssFontSize = {
    name: "font-size",
    value: "42px"
}
const cssTextAlign = {
    name: "text-align",
    value: "center"
}

let cssStyle = [cssColor,cssFontSize,cssTextAlign];

function applyCssStyle (cssStyle, text) {
    document.write("<p style='"+cssStyle[0].name+":"+cssStyle[0].value+"; "+cssStyle[1].name+":"+cssStyle[1].value+"; "+cssStyle[2].name+":"+cssStyle[2].value+"'; >"+text+"</p>");
}

// task 4
const telegrammAudience = {
    title: "telegramm",
    seats: 10,
    faculty: "f1"
}
const instagrammAudience = {
    title: "instagramm",
    seats: 20,
    faculty: "f2"
}
const VKAudience = {
    title: "vk",
    seats: 20,
    faculty: "f3"
}
const facebookAudience = {
    title: "facebook",
    seats: 10,
    faculty: "f2"
}
const appleAudience = {
    title: "apple",
    seats: 15,
    faculty: "f1"
}

let audience = [telegrammAudience, instagrammAudience, VKAudience, facebookAudience, appleAudience];

function showAllAudience (audience) {
    audience.forEach(function(element){
        console.log(element);
    })
}

function showAllAudienceForFaculty (audience, faculty) {
    audience.forEach(function(element){
        if (element.faculty == faculty)console.log(element);
    })
}

const group = {
    title: "g1",
    member: 17,
    faculty: "f2"
}

function showAllAudienceForGroup (audience, group) {
    audience.forEach(function(element){
        if (element.faculty == group.faculty && element.seats >= group.member) {
            console.log(element);
        }
    })
}

function sortAudienceForSeats(audience) {
    audience.sort(function(a,b){
        if (a.seats > b.seats) return -1;
        else if (a.seats < b.seats) return 1;
        else return 0; 
    });
    console.log(audience);
}

function sortAudienceForTitle(audience) {
    audience.sort(function(a,b){
        if (a.title > b.title) return 1;
        else if (a.title < b.title) return -1;
        else return 0; 
    });
    console.log(audience);
}