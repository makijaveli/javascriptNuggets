// Unique Values

// only unique categories
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
];

// All categories
const categoriesAll = menu.map(item => {
    return item.category;
})
console.log(categoriesAll);

// Unique categories in array
const categoriesUnique = [...new Set(menu.map(item => item.category))]
console.log(categoriesUnique)


