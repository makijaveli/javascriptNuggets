// Map always returns new Array
// Does not change size of original array
// Uses values from original array when making new one

const peoples = [
    {
        name: 'bob',
        age: 20,
        position: 'developer',
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer',
    },
    {
        name: 'susy',
        age: 30,
        position: 'the boss',
    },
    {
        name: 'john',
        age: 26,
        position: 'intern',
    },
];

// Map method return array one liner
const agesOneLiner = peoples.map(people => people.age);
console.log(agesOneLiner);

// Map method with return
const ages = peoples.map(people => {
    return people.age
});
console.log(ages);

// Map method return list of object
const newPeople = peoples.map(people => {
    return {
        firstName: people.name.toUpperCase(),
        oldAge: people.age
    }
});
console.log(newPeople);

// Convert data for frontend
const name = peoples.map(people => {
    return `<h2>${people.name.toUpperCase()}</h2>`
})
console.log(name.join(''));
