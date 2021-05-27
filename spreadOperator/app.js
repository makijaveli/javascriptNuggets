// Spread Operator...
// Allows and iterable to spread/expand individually inside receiver
// Split into single items and COPY them

const udemy = 'udemy';

console.log(...udemy);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend]

//console.log(friends)

// reference and copy !!!
const newFriends = [...friends]; // copy old array to new
newFriends[0] = 'nancy';
console.log(friends)
console.log(newFriends)


// ES 2018 - ES8 Objects

const person = {name: 'john', job: 'developer'}
const newPerson = {...person, city: 'Chicago', name: 'peter'} // override old value
console.log(person)
console.log(newPerson)