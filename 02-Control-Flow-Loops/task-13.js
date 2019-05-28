var arr = [1, -1, -5, 5, 7, -7, 9];

var a = 0;
for (items of arr) {
    if (items > 0) {
        a = a + items;
    }
}

console.log(a);