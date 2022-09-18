//Liskov substitution principle
// Функції які використовують базовий тип вони мають вміти ним взаємодіяти та взаємодіяти підтипами даного базового типа
//

// class Person {
//     access() {
//    console.log('you have a access' )
//     }
// }
//
//  class PresondForOtherCompany extends Person{
//      access() {
//          throw new Error('you havent access ')
//      }
//  }
// class Frontend extends Person{
//     canUseReact (){
//
//     }
// }
// class Backend extends Person{
//     canUseNode (){
//
//     }
// }
//
// function openDoor(person) {
//     person.access();
//
// }
//
// openDoor(new Frontend());
// openDoor(new Backend());
// openDoor(new PresondForOtherCompany ());

// такий коди порушуэ 3 принцип solid , вона не коректно працюэ з базовим класом
// наслідуватись від людини не коректно ми можемо додати рівень базового класу

// class Person {
// }
// class Member extends  Person{
//     access() {
//         console.log('you have a access' )
//     }
// }
// class Guest extends Person{
//     isGuest = true;
// }
//
//
// class PersonForOtherCompany extends Guest{
//     access() {
//         throw new Error('you havent access ')
//     }
// }
// class Frontend extends Member{
//     canUseReact (){
//
//     }
// }
// class Backend extends Member{
//     canUseNode (){
//
//     }
// }
//
// function openDoor(member) {
//     member.access();
//
// }
//
// openDoor(new Frontend());
// openDoor(new Backend());
// openDoor(new PersonForOtherCompany ());// there should be member
//такий запису буде коректний


// class Component {
//     isCompomemt = true;
// }
//
// class ComponentWithTemplate extends Component {
//     render() {
//         return `<div>Component</div>      `
//     }
// }
//
// class HigherOrderCopmponent extends Component {
//
//
// }
//
// class Header extends ComponentWithTemplate {
//     onInit() {
//     }
// }
//
// class Footer extends ComponentWithTemplate {
//     afterInit() {
//     }
// }
//
// class HOC extends HigherOrderCopmponent {
//     render() {
//         throw  new Error('Render is impossible ')
//     }
//
//     wrap(component) {
//         component.wrapped = true
//         return component;
//     }
//
// }
//
// function renderComponent(component) {
//     console.log(component.render());
// }
//
// renderComponent(new Header());
// renderComponent(new Footer());
// renderComponent(new HOC()); цей запис тепер у нас не можливий
