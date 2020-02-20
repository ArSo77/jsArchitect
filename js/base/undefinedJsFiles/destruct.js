// Array Destructuring
let myArray = [1, 2, 3];
let [first, second, third] = myArray;

// Object Destructuring
const foobar = {
    foo: "hello",
    bar: "world"
};
const {foo: baz, bar} = foobar;
console.log(baz, bar); // hello world


//Default Values in Destructured Variables
let [alpha1, alpha2, alpha3] = ['a', 'b'];
console.log(alpha1, alpha2, alpha3); // a b undefined

let [alpha1, alpha2, alpha3 = 'c'] = ['a', 'b'];
console.log(alpha1, alpha2, alpha3); // a b c

const {prime1 = 1, prime2} = {prime1: 2, prime2: 3};
console.log(prime1, prime2); // 2 3


//Capturing Unassigned Entries in a Destructured Assignment
const [favoriteSnack, ...fruits] = ['chocolate', 'apple', 'banana', 'mango'];

const {id, ...person} = {
    name: 'Tracy',
    age: 24,
    id: 1020212,
};


//Selective Values in a Destructuring Assignment
const [name] = ['Katrin', 'Judy', 'Eva'];
const {nyc: city} = {nyc: 'New York City', ldn: 'London'};
const [name1, , name2] = ['Katrin', 'Judy', 'Eva'];


//Destructuring Nested Values
let [[part1], [part2], [part3], [part4]] = [['fee', 'mee'], ['fi', 'li'], ['fo', 'ko'], ['fum', 'plum']];

console.log(part1, part2, part3, part4); //fee fi fo fum

const {
    name,
    crimes: {yearsToServe}
} = {
    name: 'John Doe',
    crimes: {
        charged: ['grand theft auto', 'stealing candy from a baby'],
        yearsToServe: 25
    }
};

console.log(yearsToServe);





//Use Cases for Destructuring Arrays and Objects

//For Loops
const greetings = { en: 'hi', es: 'hola', fr: 'bonjour' };

for (const [key, value] of Object.entries(greetings)) {
    console.log(`${key}: ${value}`);
    // en: hi
    // es: hola
    // fr: bonjour
}

//Swapping Variables
let myCup = 'coffee';
let coworkerCup = 'tea';
[myCup, coworkerCup] = [coworkerCup, myCup];




















//////// ZELEGLE ////////////////
// const arr= ["Jim",25,12,8];
// const obj = {
//     name: "John",
//     id:678,
//     data:{
//         elo: 980,
//     },
// };

// let [name, id] = arr
// console.log(name, id)


// let {name, id, data: {elo}} = obj
// console.log(name, id, elo)

// let {name, id:newName, data: {elo}} = obj
// console.log(name, newName, elo)

