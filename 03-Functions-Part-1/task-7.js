function getDivisors(n) {

    if (n === 0) {
        throw new Error('parameter can\'t be a 0');
    }

    if (typeof n !== 'number') {
        throw new Error('parameter type is not a Number');
    }

    else {
        let arr = [];
        for (i = 1; i <= n; i++) {
            if (n % i == 0) {
                arr.push(i);
            }
        }
        return arr;
    }
}

console.log(getDivisors(12));
