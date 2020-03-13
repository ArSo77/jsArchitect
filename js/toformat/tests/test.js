console.log("Start")




function Person1(name) {
    let age = 20; // this is private
    this.name = name; // this is public

    this.greet = function () {
        // here we can access both name and age
        console.log(`name: ${this.name}, age: ${age}`);
    };
}



function Person2(name){
    let age = 20; // this is private
    this.name = name; // this is public

    function greet(){
        console.log(`name: ${this.name}, age: ${age}`);
    }
    return {
        greet
    }
}


function Person3(){
    this.name="aaaaaa"
}

Person3.prototype.greet= function(){
    console.log(`name: ${this.name}`);
}



class Person4{
    constructor() {
        this.name="123"
        this.age=''
    }


    greet(){
        console.log(`name: ${this.name}`);
    }
}
let person1=new Person1("aaa")
let person2=new Person2("aaa")
let person3=new Person3("aaa")
let person4=new Person4("aaa")









person1.greet()


console.log(person1)
// console.log(person2)
// console.log(person3)

// console.log(Person4)
// console.log(person4)
//
// console.log(Person3.prototype)
// console.log(person3.prototype)
// console.log(person3.__proto__)



console.log("stop")
