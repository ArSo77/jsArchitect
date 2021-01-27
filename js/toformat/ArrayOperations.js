// let numbers = [1, 2, 3, 4, 5]
// let resp = numbers.slice(0, 3)// returns [1, 2, 3]
// console.log(resp, numbers) // returns the original array

// numbers = [1, 2, 3, //4, 5]
// resp = numbers.push("x") // 6
// console.log(resp, numbers) // [1,2,3,4,5,x]

numbers = ['a', 'b', 'c', 'd', 'e']
resp = numbers.map(item => {
    return {
        item
    }
}) // 
console.log(resp, numbers) // 