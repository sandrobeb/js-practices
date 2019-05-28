function f(arr) {
    let a = 0;
    for (item of arr) {
        if (typeof item !== 'number') {
            throw Error('all parameters type should be a Number');
        }

        else {
            a = (arr[0] - arr[1]) / arr[2];
        }
    }
    console.log(a);
}

f([9, 3, 2])