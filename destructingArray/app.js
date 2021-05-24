// Faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

// Destructing array in a row
const [john,secondItem] = friends;
console.log(john, secondItem)

// Destructing only some array items
const [first, , third, , fifth] = friends;
console.log(first, third, fifth);