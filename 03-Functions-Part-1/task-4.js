function f(n) {
    if (typeof n !== 'number') {
        throw Error('Parameter type should be a Number');
    }
    if (n == 1) {
        console.log("ორშაბათი");
    }
    if (n == 2) {
        console.log("სამშაბათი");
    }
    if (n == 3) {
        console.log("ოთხშაბათი");
    }
    if (n == 4) {
        console.log("ხუთშაბათი");
    }
    if (n == 5) {
        console.log("პარასკევი");
    }
    if (n == 6) {
        console.log("შაბათი");
    }
    if (n == 7) {
        console.log("კვირა");
    }
}

f(1)