// //Single Responsibility Principle
// //  Якщо є інша поведінка в класі  його  потрібно винести в  інший клас
//
// class Auto{
//     constructor(model,price) {
//         this.model = model;
//         this.price = price;
//         this.modified = false;
//     }
//        update(model){
//            this.model = model;
//            this.modified = true;
//        }
//     // html(){
//     //     return`
//     //        <div class="auto">
//     //        <h1>${this.model}</h1>
//     //        <p>${this.prise}</p>
//     //     </div>`
//     //    }
//     // json(){
//     //     return
//     //     JSON.stringify({
//     //         model: this.model,
//     //         price: this.prise,
//     //         modified: this.modified,
//     //
//     //     },null,2);
//     //
//     //
//     // }
// }
//
// // const auto =  new Auto('Audi','43000$')
// // console.log(auto.html());
// // console.log(auto.json());
//
//
// class newAuto {
//     constructor(auto) {
//         this.auto = auto
//     }
//
//     html() {
//         return `
//                <div class="auto">
//                <h1>${this.auto.model}</h1>
//                <p>${this.auto.price}</p>
//             </div>`
//     }
//     xml(){
//         return`
//         <auto>
//         <title>${this.auto.model}</title>
//         <title>${this.auto.price}</title>
// </auto>
//         `
//     }
//     json(){
//         return JSON.stringify(
//             {
//                 model: this.auto.model,
//                 price: this.auto.price,
//                 modified: this.auto.modified
//             }
//         )
//     }
//
// }
//
// const buy =  new newAuto(
//     new Auto('Audi','43000$')
// )
// console.log(buy.html());
// console.log(buy.xml());
// console.log(buy.json());




