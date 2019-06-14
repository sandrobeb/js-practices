class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days
    }

}

const worker = new Worker('John', 'Smith', 10, 31);
const worker2 = new Worker('John', 'Doe', 10, 28);

console.log(worker.name); // print 'John'
console.log(worker.surname); // print 'Smith'
console.log(worker.rate); // print 10
console.log(worker.days); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31
console.log(worker.getSalary() + worker2.getSalary()); // sum of salaries
