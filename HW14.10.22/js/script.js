// // task 1
// let a = prompt("What is your name?");
// alert(`Hello, ${a}`);

// // task 2
// let age = prompt("What is your year of birth?");
// let date = new Date();
// const currentYear = date.getFullYear();
// alert(`${currentYear - age} - is your age!`);

// // task 3
// let a = prompt("input a");
// alert(`P = ${a*4}`);

// // task 4
// let a = prompt("input s");
// alert(`S = ${(a*a)*3.14}`);

// // task 5
// let s = prompt("input s in km");
// let t = prompt("input t in hour");
// alert(`${s/t} km/h`);

// // task 6
// let dollar = prompt("input dollars");
// const course = 1.01;
// alert(`${dollar*course} euro`);

// // task 7
// let value = prompt("input value in gb");
// alert(`${Math.floor(value/(820/1000))} files`);

// // task 8
// let value = prompt("input value");
// let coast = prompt("input coast");
// alert(`${Math.trunc(value/coast)} schocolate and ${value - coast*(Math.trunc(value/coast))} dollars`);

// // task 9
// let num = prompt("input num");
// let n = 0;
// for (let i=100, k=10, m=1;i>1;i/=10, k*=10,m*=10) {
//     n += Math.trunc(num%k/m)*i;
// }
// n+=Math.trunc(num/100);1
// alert(n);

// task 10
let num = prompt("input num");
alert(`${num} is event - ${!Boolean(num%2)}`);