/*
Create the function `getCustomers` that can merge 2 arrays with objects.

The merge operation is performed by the key `id` and only for objects that have the flag `verified: true`.

**ATTENTION**:
1. If array `countries` doesn't have required `id`, promise **HAS TO BE** rejected with text `We don't have information about country for this customer: ${customer.name}`
2. Merge is possible **ONLY** for objects with flag `verified: true`.
*/
const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex',
        verified: true
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

let ind


function getCustomers(customer, countries) {
    if ([customer.hasOwnProperty('verified')] && [customer.verified == true]) {
        for (ind = 0; ind < 5; ind++) { 
            object3= {...customers[ind], ...countries[ind] }
        }
        return Promise.resolve();
    }

    return Promise.reject('Customer is not verified');
}



getCustomers(customers, countries)
    .then((customers) => object3= {...customers, ...countries } )
    .catch(error => console.log(error))

