// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function!!!
// always at the end

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, ...restOfFruits] = fruits;
console.log(restOfFruits);

// objects
const person = {name: 'john', last: 'smith', job: 'developer'}
const {job, ...restOfPerson} = person
console.log(job, restOfPerson);

// functions
const getAverage = (name, ...scores) => {
    console.log(name)
    console.log(scores)
    const average = scores.reduce((total, item) => {
        return total += item;
    }, 0) / scores.length;
    console.log(average);
}

//getAverage(person.name, 10, 25, 12)
const testScores = [23, 45,67, 89];
getAverage(person.name, ...testScores)