//rest-params
'Bad Function Code 💩'

function totalHitPoints(a, b, c, d) {
    return a + b + c + d;
}

'Good Function Code ✅'
function totalHitPoints(...hits) {
    return hits.reduce((a, b) => a + b);
}
totalHitPoints(1,2,3,4,5,6,7,)



//spread-syntax
// Objects
const pikachu = { name: 'Pikachu 🐹'  };
const stats = { hp: 40, attack: 60, defense: 45 }

'Bad Object Code 💩'
pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense
// OR
const lvl0 = Object.assign(pikachu, stats)
const lvl1 = Object.assign(pikachu, { hp: 45 })

'Good Object Code ✅'
const lvl0 = { ...pikachu, ...stats }
const lvl1 = { ...pikachu, hp: 45 }

// Arrays

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

'Bad Array Code 💩'
pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')

'Good Array Code ✅'
// Push
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']
// Shift
pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle', ]





///template-literals
const horse = {
    name: 'Topher 🐴',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

'Bad String Code 💩'
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ')

'Good String Code ✅'
const { name, size, skills } = horse;
bio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`
console.log(bio);

// Advanced Tag Example
function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}
const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2)












