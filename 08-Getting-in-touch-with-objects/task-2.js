const person = {
    rate: 30,
    get salary() {
        if (this.rate == '') {
            return 0;
        }
        const today = new Date();
        const day = today.getDate();
        return day * this.rate;
    },

    set salary(ragaca) {
        throw new Error('Cannot set');
    }








    
}

Object.defineProperty(person, 'rate', {
    configurable: false,
    enumerable: false,
});

Object.defineProperty(person, 'salary', {
    configurable: false,
});

console.log(person.salary);
