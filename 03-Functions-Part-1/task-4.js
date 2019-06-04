function f(n) {
    if (typeof n !== 'number') {
        throw Error('Parameter type should be a Number');
    }
    if (n == 1) {
        return "ორშაბათი";
    }
    if (n == 2) {
        return "სამშაბათი";
    }
    if (n == 3) {
        return "ოთხშაბათი";
    }
    if (n == 4) {
        return "ხუთშაბათი";
    }
    if (n == 5) {
        return "პარასკევი";
    }
    if (n == 6) {
        return "შაბათი";
    }
    if (n == 7) {
        return "კვირა";
    }
}

console.log(f(1));