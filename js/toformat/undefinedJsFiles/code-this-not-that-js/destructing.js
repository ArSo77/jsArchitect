const turtle = {
    name: 'Bob 🐢',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

function feeda({ name, meal, diet }) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}
// OR
function feedb(animal) {
    const { name, meal, diet } = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log(feeda(turtle))
console.log(feedb(turtle))
