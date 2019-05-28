var a;
var b;

for (a = 2; a <= 10; a++) {
    var p = true;
    for (b = 2; b < a; b++) {
        if (a % b == 0) {
            var p = false;
            break;
        }
    }
    if (p) {
        console.log(a);
    }
}