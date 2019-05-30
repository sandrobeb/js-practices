function forEach(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error("parameter has to be array!");
 }
 if (typeof cb != "function"){
     throw new Error("parameter has to be function!");
 }
 for (i = 0; i < arr.length; i++){
     cb(arr[i], i, arr)
 }
}

const arr = [1, 2, 3];

forEach(arr, function (item, i, arr) {
    console.log(item, i, arr);
});