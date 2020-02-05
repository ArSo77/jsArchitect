const orders = [500, 30, 99, 15, 223];

// Reduce
const total = orders.reduce((acc, cur) => acc + cur)

// Map
const withTax = orders.map(v => v * 1.1)

// Filter
const highValue = orders.filter(v => v > 100);

const everyValueGreaterThan50 = orders.every(v => v > 50)

const everyValueGreaterThan10 = orders.every(v => v > 10)

const someValueGreaterThan500 = orders.some(v => v > 500)

const someValueGreaterThan10 = orders.some(v => v > 10)
