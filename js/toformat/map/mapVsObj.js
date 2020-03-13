//ES2015
let map = new Map([[51, "a"], [145, "r"], [1, "o"]])
let obj = {51:'a', 145:'r', 1: 'o'}
for( let [key, letter] of map){ //to jest destrukturyzacja, mozna tez przez entry of map.keys() lub entry of map.values()
    console.log(letter)
}
for (let key in obj) {
    console.log(obj[key])
}
//długość mapy vs obiektu
// console.log(map.size) //3
// console.log(Object.keys(obj).length) //3
//mapy dla obiektow z duza iloscia danych



//********************************//
//ES6
// Struktury danych w JS
// Tablice - w których przechowujemy zestawy danych w uporządkowanej kolejności
// Obiekty - w których przechowujemy zestawy danych oznaczonych kluczem
// Mapy - obiekty ale w ich przypasdku kluczem moze być wartość dowolnego typu
//map.set(key,value)
//map.get(key)
//map.delete(key)
//map.has(key)
//map.clear() - czyści całą mape
//map.size




let map2 = new Map();

map2.set(1, "just")
map2.set('1', "just"); /*?*/

map2.set(5, "123").set("5",734)
map2.set(obj, 1576)

obj.h="123"

console.log(map2)



let map3 = new Map(Object.entries(obj))
console.log("map3", {map3})
