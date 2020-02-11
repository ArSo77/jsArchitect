










function Person(name) {
    let age = 20; // this is private
    this.name = name; // this is public

    this.greet = function () {
        // here we can access both name and age
        console.log(`name: ${this.name}, age: ${age}`);
    };
}



function counter() {
    let count = 0;
    const increment = (x = 1) => count = count + x;
    const decrement = (x = 1) => count = count - x;
    const getCount = () => console.log(count);
    function getCountByFunction(){
        return count
    }
    return {
        increment,
        decrement,
        getCount,
        getCountByFunction
    }
}
