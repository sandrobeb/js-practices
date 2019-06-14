const Validator = class {
    constructor() { }

    isEmail(email) {
        let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return valid.test(String(email).toLowerCase());
    }
    isDomain(domain) {
        let valid = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
        return valid.test(String(domain).toLowerCase());
    }
    isDate(date) {
        let valid = /([0-9]{2}[\./]){2}[0-9]{4}/;
        return valid.test(date);
    }
    isPhone(num) {
        let valid = /^\+([0-9]+)+\s+\([0-9]+\)+\s+([0-9]+-[0-9]+-[0-9])+[0-9]/;
        return valid.test(String(num).toLowerCase());
    }

}

let validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country