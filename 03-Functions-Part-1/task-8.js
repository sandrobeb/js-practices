let numbers = [1, 2, 3];

function f(numbers) {
    if (numbers.length === 0) {
        throw new Error('parameter can\'t be an empty');
    }
    if (Array.isArray(numbers)) {
        for (i of numbers) {
            return i;
        }
    }
    else {
        throw new Error('parameter type should be an array');
    }
}

console.log(f(numbers));