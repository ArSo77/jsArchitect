const arr= ["Jim",25,12,8];
const obj = {
    name: "John",
    id:678,
    data:{
        elo: 980,
    },
};

// let [name, id] = arr
// console.log(name, id)


// let {name, id, data: {elo}} = obj
// console.log(name, id, elo)

let {name, id:newName, data: {elo}} = obj
console.log(name, newName, elo)
