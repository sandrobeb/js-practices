function checkSpam(source, example) {
    if (typeof source != 'string' || typeof example != 'string') {
        throw new Error('Parameter should be string')
    }

    let sourceUp = source.toUpperCase();
    let exampleUp = example.toUpperCase();
    
    if (sourceUp.includes(exampleUp)) {
        return true;
    }

    else {
        return false;
    }
}

console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); 
