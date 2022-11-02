function task1 (a,b) {
    if (a>b) return 1;
    else if (a<b) return -1;
    else return 0;
}

function task2 (num) {
    let result = 1;
    for (let i=1;i<=num;i++) {
        result *= i;
    }
    return result;
}

function task3 (a,b,c) {
     return Number(a.toLocaleString() + b.toLocaleString() + c.toLocaleString());
}

function task4 (a,b=a) {
    return a*b;
}

function task5 (num) {
    let result = 0;
    for (let i=1;i<num/2+1;i++) {
        if (num%i == 0) result += i;
    }
    if (result == num && num!=0 && num!=1) return true;
    else return false;
}

function task6 (min,max) {
    for (let i=min;i<=max;i++) {
        if (task5(i)) console.log(i);
    }
}

function task7 (h,m,s) {
    if (h<10) h = 0 + h.toLocaleString();
    if (m<10) m = 0 + m.toLocaleString();
    if (s<10) s = 0 + s.toLocaleString();
    console.log(`${h}:${m}:${s}`);
}

function task8 (h,m,s) {
    return (h*3600)+(m*60)+s;
}

function task9 (s) {
    let h = Math.trunc(s/3600);
    s-=h*3600;
    let m = Math.trunc(s/60);
    s-=m*60;
    if (h<10) h = 0 + h.toLocaleString();
    if (m<10) m = 0 + m.toLocaleString();
    if (s<10) s = 0 + s.toLocaleString();
    return (`${h}:${m}:${s}`);
}

function task10 (h1,m1,s1,h2,m2,s2) {
    s1 = task8(h1,m1,s1);
    s2 = task8(h2,m2,s2);
    return (task9(Math.abs(s1-s2)));
}