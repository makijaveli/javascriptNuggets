const fetch = require('node-fetch');
// Reduce - Objects

// Cart example
const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 599.99,
        amount: 1,
    },
    {
        title: 'Google pixel',
        price: 499.99,
        amount: 2,
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        amount: 4,
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 399.99,
        amount: 3,
    },
]

// Reduce array and return an object
let {totalItems, cartTotal} = cart.reduce((total, cartItem) => {
    console.log(`Current item ${cartItem.title} `);
    const {amount, price} = cartItem; // destructing object
    // count items
    total.totalItems += amount;
    // cart price total
    total.cartTotal += amount * price;
    return total;
}, {
    totalItems: 0,
    cartTotal: 0
})
// Fix number
cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItems, cartTotal);

// github repos example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // Only repos where language is JavaScript
    const newData = data.reduce((total, repo) => {
        const {language} = repo;
        if (language) {
            // Dynamic object keys and operator
            total[language] = total[language] + 1 || 1;
        }
        return total;
    }, {})
    console.log(newData);
}

fetchRepos();