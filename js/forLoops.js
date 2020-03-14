// Use for…of to iterate over the values in an iterable, like an array for example:
let animals = ['a','b','c','d'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
    // Random name for our animal
    console.log(`${animal}`);
}
//for..of -> a,b,c,d
//for..in -> 0,1,2,3

let str = 'ert';
for (let char of str) {
    console.log(char.toUpperCase().repeat(3));
}
//for..of -> EEE,RRR,TTT
//for..in -> 0,1,2






let oldCar = {
    make: 'Toyota',
    model: 'Tercel',
    year: '1996'
};

for (let key in oldCar) {
    console.log(`${key} --> ${oldCar[key]}`);
}

// make --> Toyota
// model --> Tercel
