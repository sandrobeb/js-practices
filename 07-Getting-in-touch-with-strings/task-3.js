function truncate(string, maxlength) {
    if (typeof string != 'string') {
        throw new Error('Parameter should be string')
    }
    if (typeof maxlength != 'number') {
        throw new Error('Parameter should be number')
    }
    let end = '...';
    if (string.length > maxlength) {
        return string.substring(0, maxlength - end.length) + end;
    }
}

console.log(truncate('I wanna to say next thing about this topic', 22));