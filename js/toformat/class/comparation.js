

// 1
function userCreator(name, score) {
    const newUser = Object.create(functionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser
}
const functionStore = {
    increment: function () { this.score++; }
}
const user1 = userCreator("AAA", 123)






// 2
function userCreator2(name, score) {
    this.name = name;
    this.score = score;
}
userCreator2.prototype // {};
userCreator2.prototype.increment = function () {
    this.score++;
}
const user2 = new userCreator2("BBB", 456)






// 3
class UserCreator3 {
    constructor(name, score) {
        this.name = name
        this.score = score
    }
    increment() { this.score++ }
    login() { console.log("login:") }
}
const user3 = new UserCreator3("CCC", 978)
user3.increment();




console.log({ user1, user2, user3 })
