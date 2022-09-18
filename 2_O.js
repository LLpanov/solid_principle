// Open-Close Principle
// деякі класи які ми створюємо мають бути відкриті для розширення, але закриті для модифікацій
//Проєктувати класи в проєкт таким чином якщо з'являться нові кейси чи нові функції, щоб ми не модифікували свій старий код.,
// а він був спроектованний таким образом, щоб ми могли внести зміни чогось нового від замовника без зміни старого коду


// class Square {
//     constructor(size) {
//         this.type = 'square';
//         this.size = size;
//     }
// }
//
// class Circle {
//     constructor(radius) {
//         this.type = 'circle';
//         this.radius = radius;
//     }
// }
//
// class Rect {
//     constructor(width, height) {
//         this.type = 'rect';
//         this.width = width;
//         this.height = height;
//     }
//
// }
//
// // console.log(new Circle(5));
// // console.log(new Square(3));
//
// class AreaCalculator {
//     constructor(shapes = []) {
//         this.shapes = shapes;
//     }
//
//     sum() {
//         return this.shapes.reduce((result, shape) => {
//             if (shape.type === 'circle') {
//                 result += (shape.radius ** 2) * Math.PI
//             } else if (shape.type === 'square') {
//                 result += shape.size ** 2
//             } else if (shape.type === 'rect') {
//                 result += shape.width * shape.height
//             }
//             return result
//         }, 0)
//     }
// }
//
// const calc = new AreaCalculator([
//     new Square(10),
//     new Circle(3),
//     new Square(5),
//     new Rect(10, 29)
//
// ]);
// console.log(calc.sum());

//якщо додати ще 100 фігур ми будемо 100 раз модифікувати свій метод sum добавляючи кожну фігуру, і кожний раз переписуємо метод

// як зробити згідно принципу open close, ми не змінюємо метод sum() кожний раз коли потрібно додати нову фігуру

// class Shape {
//     area() {
//         throw new Error('area method should be implemented')
//     }
// }
//
//
// class Square extends Shape {
//     constructor(size) {
//         super()
//         this.size = size;
//     }
//
//     area() {
//         return this.size ** 2
//     }
// }
//
// class Circle extends Shape {
//     constructor(radius) {
//         super()
//         this.radius = radius;
//     }
//
//     area() {
//         return (this.radius ** 2) * Math.PI
//     }
// }
//
// class Rect extends Shape {
//     constructor(width, height) {
//         super()
//         this.width = width;
//         this.height = height;
//     }
//
//     area() {
//         return this.width * this.height;
//     }
//
// }
//
// class Triangle extends Shape {
//     constructor(a, b) {
//         super()
//         this.a = a;
//         this.b = b;
//
//     }
//
//     area() {
//         return (this.a * this.b) / 2
//     }
// }
//
// class AreaCalculator {
//     constructor(shapes = []) {
//         this.shapes = shapes;
//     }
//
//     sum() {
//         return this.shapes.reduce((result, shape) => {
//             result += shape.area()
//             return result
//         }, 0)
//     }
// }
//
// const calc = new AreaCalculator([
//     new Square(10),
//     new Circle(3),
//     new Square(5),
//     new Rect(10, 29),
//     new Triangle(10, 2)
// ]);
// console.log(calc.sum());
