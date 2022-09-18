//Dependency inversion principle
// Верхній рівень модулей не має залежати від абстракцій нижнього рівня і люби рівні мають залежати від абстракцій, а не конкретики

//не підтримує принцип :
// class Fetch {
//     request(url) {
//         // return fetch(url).then(r => r.json());
//         return Promise.resolve('data for fetch');
//     }
//
// }
//
// class LocalStorage {
//     get() {
//         const dataFromLocalStorage = 'data from local storage'
//         return dataFromLocalStorage;
//     }
//
// }
//
// class Database {
//     constructor() {
//         // this.fetch = new Fetch();
//         this.localStorage = new LocalStorage();
//     }
//
//
//     getData() {
//         // return this.fetch.request('google.com');
//         return this.localStorage.get('ls key');
//     }
// }
//
// const db = new Database()
// console.log(db.getData());
//
//підтримує принцип :

//
// class Fetch {
//     request(url) {
//         return Promise.resolve('data for fetch');
//     }
//
// }
//
// class LocalStorage {
//     get() {
//         const dataFromLocalStorage = 'data from local storage'
//         return dataFromLocalStorage;
//     }
//
// }
//
// class FetchClient {
//     constructor() {
//         this.fetch = new Fetch();
//     }
//
//     clientGet() {
//      return  this.fetch.request('google.com');
//
//     }
//
//
// }
//
// class LocalStorageClient {
//     constructor() {
//         this.localStorage = new LocalStorage();
//     }
//
//     clientGet(key) {
//         return this.localStorage.get(key);
//     }
//
// }
//
//
// class Database {
//     constructor(client) {
//         this.client = client;
//     }
//
//     getData(key) {
//         return this.client.clientGet(key)
//     }
// }
//
// const db = new Database(new LocalStorageClient()) // or FetchClient()
// console.log(db.getData('key'));

// ми не змінюємо локал сторедж не змінюємо  реалізацію бази даних не пишемо інший код просто передаємо інший клас в конструктор
// база даних не залежить від абстракцій нижчого рівня  вона залежить тільки від тих абстракцій яки ми передали в клас
// змінили порядок залежностей і зробили код масштабованим (концепція Ангуляр)


// SOlID = це принципи які позволяють  писати маштабованний код з точки зору  архітектури проекту ,який запобігає в запутуваності
// взаємозв'язках, щоб проект був масштабованим та легкопідтрумуваним
