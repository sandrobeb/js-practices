const person = {

    salary: '',

    get salary() {
        const today = new Date();
        const day = today.getDate();
        const month = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

        if (month - day > 20) {
            return 'good salary';
        }

        else {
            return 'bad salary';
        }

    },
};

console.log(person.salary);