function isEven(n) {
    if (typeof n !== 'number') {
        throw Error('parameter type is not a Number');
    }
    if (n %2 ==0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

isEven(3)