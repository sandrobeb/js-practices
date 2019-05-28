var arr = [1,2,3,4];

var a=0;
for (items of arr) {
    if (items  %2 == 0 && items > 3) {
        a = a+items;
}
}

console.log(a);