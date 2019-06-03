function upperCaseFirst(string) {
    if (typeof string != 'string') {
        throw new Error('Parameter should be string')
    }
    else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

console.log(upperCaseFirst('pitter'));
