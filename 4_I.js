//Interface segregation Principle
//Говорить про те що ті класи які наслідуються від базового класу, якщо вони не використовуються методи базового класу вони
// не мають від них залежати

//проблематика: не коректна та громістка структура лишня пам'ять лишній функціонал потрібно відключати методи

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//
//     eatMeat() {
//         console.log(`${this.name} вміє їсти м'ясо`)
//     };
//
//     walk() {
//         console.log(`${this.name} вміє  гуляти`)
//     };
//
//     swim() {
//         console.log(`${this.name} вміє  плавати`)
//     };
//
//     fly() {
//         console.log(`${this.name} вміє  літати`)
//     };
//
// }
//
// class Dog extends Animal {
//     fly() {
//         return null;
//     }
// }
//
// class Eagle extends Animal {
//     swim() {
//         return null
//     }
// }
//
// class Whale extends Animal {
//     fly() {
//         return null
//     }
//
//     walk() {
//         return null;
//     }
// }
//
// const dog = new Dog('bobik');
// dog.walk();
// dog.swim();
// dog.fly();
// dog.eatMeat()
//
// const eagle = new Eagle('vasya');
// eagle.fly();
// eagle.eatMeat();
// eagle.walk()
// eagle.swim()
//
//
// const whale = new Whale('blue-kit')
// whale.swim()
// whale.eatMeat()
// whale.walk()
// whale.fly()
//

//коректний функціонал без лишніх методів і елементів

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// const swimmer = {
//     swim() {
//         console.log(`${this.name} вміє  плавати`)
//     }
//
// }
// const flier = {
//     fly() {
//         console.log(`${this.name} вміє  літати`)
//     }
//
// }
// const walker = {
//     walk() {
//         console.log(`${this.name} вміє  гуляти`)
//     }
// }
//
// class Dog extends Animal {
// }
//
// class Eagle extends Animal {
// }
//
// class Whale extends Animal {
// }
//
// Object.assign(Dog.prototype, swimmer, walker,);
// Object.assign(Eagle.prototype, flier, walker);
// Object.assign(Whale.prototype, swimmer);
//
// const dog = new Dog('bobik');
// dog.walk();
// dog.swim();
//
// const eagle = new Eagle('vasya');
// eagle.fly();
// eagle.walk()
//
// const whale = new Whale('blue-kit')
// whale.swim();
