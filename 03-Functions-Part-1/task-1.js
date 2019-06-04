function f(n) {
    if (typeof n === 'number') {
        return n ** 3;
    }
    else {
        throw Error('parameter type is not a Number');
    }
}

console.log(f(2));