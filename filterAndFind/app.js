// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'intern' },
];

// Filter method
const youngPeople = people.filter((person) => {
    return person.age < 30
})
console.log(youngPeople)

const developers = people.filter((person) => {
    return person.position === 'developer'
})
console.log(developers)

// No match method
const seniorDevs = people.filter(person => {
    return person.position === 'senior dev'
})
console.log(seniorDevs) // empty array

// Find method
const peter = people.find((person) => {
    return person.name === 'peter'
})
console.log(peter)

// No match with find method
const oldPerson = people.find(person => {
    return person.age > 40;
})
console.log(oldPerson) //undefined

// Multiple matches with find method
const multiplePerson = people.find(person => {
    return person.age > 20
})
console.log(multiplePerson) // first match
