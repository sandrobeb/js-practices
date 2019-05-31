let arr = [5, 9, 12, -2, 3, 1]

for (i in arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            narr = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = narr;
        }
    }
}

console.log(arr);