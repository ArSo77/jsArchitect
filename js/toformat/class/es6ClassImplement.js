class Klasa{
    constructor ({arg1, arg2}) {
        this.arg1 = arg1
        this.arg2 = arg2
    }
}




class Prostokat {
    constructor(wysokosc, szerokosc) {
        this.wysokosc = wysokosc;
        this.szerokosc = szerokosc;
    }

    get pole() {
        return this.liczPole();
    }

    liczPole() {
        return this.wysokosc * this.szerokosc;
    }
}
const kwadrat = new Prostokat(10, 10);
console.log(kwadrat.pole);


class Punkt {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static odleglosc(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

const p1 = new Punkt(5, 5);
const p2 = new Punkt(10, 10);

console.log(Punkt.odleglosc(p1, p2));


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

var d = new Dog('Mitzie');
d.speak();







