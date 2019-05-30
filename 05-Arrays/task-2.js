function filter(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error("parameter has to be array!");
    }
    if (typeof cb != "function") {
        throw new Error("parameter has to be function!");
    }

    let f = [];

    for (i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            f.push(arr[i])
        }
    }
    return f;
}

const arr = [1, 2, 3];

let final = filter(arr, function (item, i, arr) {
    return item > 0;
});

console.log(final);