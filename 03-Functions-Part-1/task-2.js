function f(arr) {
    let a = 0;
    for (item of arr) {
        if (typeof item !== 'number') {
            throw Error('all parameters type should be a Number');
        }

        else {
            a = a + item;
        }
    }
    console.log(a);
}

f([1, 1, 1])