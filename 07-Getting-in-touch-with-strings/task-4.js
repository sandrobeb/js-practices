function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        throw new Error('Parameter should be string');
    }

    return +source.slice(1);
}

console.log(extractCurrencyValue('$120')); 
