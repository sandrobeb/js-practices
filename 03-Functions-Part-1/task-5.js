let arr = [1, 2, -4, 3, -9, -1, 7];
let arr2 = [];

function f() {
    for (item of arr) {
        if (item > 0) {
            arr2.push(item);
        }
    }
    console.log(arr2);
}
f()

function isPositive(n) {
    if (typeof n !== 'number') {
        throw Error('Parameter type should be a Number');
    }
        if (n > 0) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    } 

isPositive(3)