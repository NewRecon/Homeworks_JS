function task1 (num, pow) {
    let n=num;
    if (pow-1>1) num = task1(num, --pow);
    return num*n;
}

function task2 (a,b, result=b) {
    if (a%result == b%result && a%result == 0) return result;
    else {
        result = task2(a,b,--result);
        return result;
    }
}

function task3 (num, buf=10) {
    let max = Math.trunc(num%buf/(buf/10));
    if (Math.trunc(num/(buf)) != 0) {
        if (max < task3 (num, buf*10)) max = task3 (num, buf*=10);
    }
    return max;
}

function task4 (num, result=1, iter=2) {
    if (iter<num/2+1) {
        if (num%iter == 0) result++;
        if (result<2) task4 (num, result, ++iter)
    }
    if (result>=2 || num==1) return false;
    return true;
}

function task5 (num) {
    let simple = 2;
    while (num%simple != 0) {
        simple++;
        while(!task4(simple)) simple++;
    }
    console.log(simple);
    num = num/simple;
    if (num>1) task5(num);
}

function task6 (index, a=0, b=1) {
    let result = a+b;
    if (index>2) result = task6(--index, b, result);
    return result;
}