//1. By counting arguments length:
function product(a) {
    if (arguments.length == 2) {
        return arguments[0] * arguments[1];
    } else {
        return function(b) {
            return a * b;
        };
    }
}
console.log(product(4, 5)); // 20
console.log(product(4)(5)); // 20

//2. By checking if the second argument exists:
function product(a, b) {
    if (b) { // if b exists
        return a * b;
    } else {
        return function(b) {
            return a * b;
        };
    }
}
console.log(product(4, 5)); // 20
console.log(product(4)(5)); // 20
