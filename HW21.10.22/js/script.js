// task 1
const car = {
    developer: "honda",
    model: "civik",
    year: 2015,
    avgSpeed: 120
}

function showInfo(car) {
    console.log(car);
}

function roadTime (car, km) {
    let time = km/car.avgSpeed;
    if (time/4>1) {
        let reflex = Math.trunc(time/4);
        time += reflex;
    }
    return time;
}

// task 2
const fraction1 = {
    up: 1,
    down: 4
}

const fraction2 = {
    up: 2,
    down: 3
}

function sum(fraction1, fraction2) {
    const result = {};
    result.up = fraction1.up*fraction2.down + fraction2.up*fraction1.down;
    result.down = fraction1.down*fraction2.down;
    return result;
}

function subtraction(fraction1, fraction2) {
    const result = {};
    result.up = fraction1.up*fraction2.down - fraction2.up*fraction1.down;
    result.down = fraction1.down*fraction2.down;
    return result;
}

function multiplication(fraction1, fraction2) {
    const result = {};
    result.up = fraction1.up*fraction2.up;
    result.down = fraction1.down*fraction2.down;
    return result;
}

function division(fraction1, fraction2) {
    const result = {};
    result.up = fraction1.up*fraction2.down;
    result.down = fraction1.down*fraction2.up;
    return result;
}

// task 3
const time = {
    hour: 20,
    min: 30,
    sec: 45
}

function showTime(time) {
    console.log(time);
}

function changeTimeOnSec(time,sec) {
    let result = time.sec + time.min*60 + time.hour*3600 + sec;
    time.hour = Math.trunc(result/3600);
    result -= time.hour*3600;
    time.min = Math.trunc(result/60);
    result -= time.min*60;
    time.sec = result;
    return time;
}

function changeTimeOnMin(time,min) {
    let result = time.sec + time.min*60 + time.hour*3600 + min*60;
    time.hour = Math.trunc(result/3600);
    result -= time.hour*3600;
    time.min = Math.trunc(result/60);
    result -= time.min*60;
    time.sec = result;
    return time;
}

function changeTimeOnHour(time,hour) {
    let result = time.sec + time.min*60 + time.hour*3600 + hour*3600;
    time.hour = Math.trunc(result/3600);
    result -= time.hour*3600;
    time.min = Math.trunc(result/60);
    result -= time.min*60;
    time.sec = result;
    return time;
}