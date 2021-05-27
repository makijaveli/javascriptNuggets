// faster/easier way to access/unpack values from objects

const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane',
    },
};

const firstName = bob.first;
const lastName = bob.last;
//const sister = bob.siblings.sister;

//console.log(firstName, lastName, sister);

const {first, last:prezime, siblings: {sister}} = bob;

console.log(first, prezime, sister);

const printPerson = ({first, last}) => {
    console.log(first, last)
}

printPerson(bob);