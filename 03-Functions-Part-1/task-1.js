function f(n) {
    if (typeof n === 'number') {
        return console.log(n ** 3);
    }
    else {
        throw Error('parameter type is not a Number');
    }
}
f(2)