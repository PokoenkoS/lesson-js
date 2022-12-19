// 
// // Напишіть код, який запитуватиме// логін за допомогою prompt і буде виводити результат//
//  в консоль браузера// Якщо користувач вводить "admin",// то prompt запитує пароль.// 
//  Якщо нічого не ввели або натиснута клавіша Esc// вивести рядок "Cancel"//
//   Інакше вивести рядок "I don't know you"//Пароль перевіряти так:// 
//   Якщо введено пароль "i am admin",// 
// то вивести рядок "Hello!"// інакше виводити рядок "Wrong password!"





// if (login ==="admin") {
//     const password = prompt ("введіть пароль");
//     if (password ==="I am admin"){ 
//         console.log ("Hello");
//     }
// } else if (!login) {
// console.log ("Cansel");
// } else {
//     console.log ("I dont know you");
// };
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// // Напишіть через світч пошук автора мови програмування//
//  Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор// 
//  PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом
//   Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер//
//    JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум
// const language = prompt ( "Введіть мову програмування");


// switch (language?.toLocaleLowerCase()) {
//     case `php`: 
//     console.log (`PHP Расмус Лердорф`);
//     break;

//     case `c#`:
//     console.log (`C# група інженерів компанії Microsoft під керівництвом
//      Андерса Хейлсберга та Скотта Вільтаумота`);
//      break;

//     case `js`: 
//     console.log (`JS Брендан Ейх`);
//     break;

//     case `java`: 
//     console.log (`Java Джеймс Гослінг`);;
//     break;

//     case `python`: 
//     console.log (`Python Гвідо ван Россум`);
//     break;
// default: 
// console.log (`Інша мова`);
// }
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
// Напишіть консольну функцію, на яку користувач вводить суму зп
// і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків,
// Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.


// Напишите функцию logItems(items), которая принимает массив и использует forцикл,
//  который для каждого элемента массива выводит на консоль сообщение в формате 
//  <item number> - <item value>. Нумерация элементов должна начинаться с 1.

// Например, для первого элемента массива ['Mango', 'Poly', 'Ajax']с индексом 0 будет
//  напечатано, 1 - Mangoа для индекса 2 будет напечатано 3 - Ajax.

// function logItems(items) {
//     for (let i=0; i < items.length; i++) {
       
//         console.log(`${i+1} - ${items[i]}`);
//     }
   
//   }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// !||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
//  Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість
//   id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість
//  товару в консоль
// const map = [
//     { name: "alex",
//       rating: 57,
//       amount: 5,
//       price: 10,
//     },
//     { name: "ivan",
//     rating: 29,
//     amount: 5,
//     price: 10,
//   },
//     { name: "michl",
//     rating: 180,
//     amount: 5,
//     price: 10,
// }
// ]
// function createProduct(obj, callback) {
//     obj.id = 57;
//     callback(obj);
// }

// function newProduct (product) {
//     console.log(product);
// }; 

// function logTotalPrice(product) {
//     console.log(map[0].amount * map[0].price);
// };


// createProduct(map[2], newProduct);
// createProduct(map[2], logTotalPrice);
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError),
//  де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance,
//  і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює
//  нулю, і onSuccess в іншому випадку.
// const TRANSACTION_LIMIT = 5000;

// const account = {
//     user: `Alex`,
//     balance: 1000,
//     withdrow(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//            onError(`${amount} перевищила ліміт`);
//         } else if(amount > this.balance) {
//             onError(`${amount} більша за баланс`)
//         } else {
           
//             this.balance -= amount;
//             onSuccess(`Операція успішна баланс: ${this.balance}`);
//         }
//     },

//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`${amount} перевищила ліміт`);
//          } else if(amount <= 0){
//              onError(`${amount} більша за баланс`);
//          } else {
//              this.balance += amount;
//              onSuccess(`Операція успішна баланс: ${this.balance}`);
//          }
//     }
// }

// function letOnSucces(message){
//     console.log(`Успішно ${message}`);
// };
// function letOnError(message){
//     console.log(`Помилка ${message}`);
// };
// account.withdrow(100, letOnSucces, letOnError);
// account.withdrow(5000, letOnSucces, letOnError);
// account.withdrow(100, letOnSucces, letOnError);
// account.deposit(100, letOnSucces, letOnError);


// const sum=5;
// !///////////////////////////////////////////////////////////////////////
// const cars = [
//     {
//       make: "Honda",
//       modcar: "CR-V",
//       type: "suv",
//       amount: 14,
//       price: 24045,
//       onSale: true,
//     },
//     {
//       make: "Honda",
//       modcar: "Accord",
//       type: "sedan",
//       amount: 2,
//       price: 22455,
//       onSale: true,
//     },
//     {
//       make: "Mazda",
//       modcar: "Mazda 6",
//       type: "sedan",
//       amount: 8,
//       price: 24195,
//       onSale: false,
//     },
//     {
//       make: "Mazda",
//       modcar: "CX-9",
//       type: "suv",
//       amount: 7,
//       price: 31520,
//       onSale: true,
//     },
//     {
//       make: "Toyota",
//       modcar: "4Runner",
//       type: "suv",
//       amount: 19,
//       price: 34210,
//       onSale: false,
//     },
//     {
//       make: "Toyota",
//       modcar: "Sequoia",
//       type: "suv",
//       amount: 16,
//       price: 45560,
//       onSale: false,
//     },
//     {
//       make: "Toyota",
//       modcar: "Tacoma",
//       type: "truck",
//       amount: 4,
//       price: 24320,
//       onSale: true,
//     },
//     {
//       make: "Ford",
//       modcar: "F-150",
//       type: "truck",
//       amount: 11,
//       price: 27110,
//       onSale: true,
//     },
//     {
//       make: "Ford",
//       modcar: "Fusion",
//       type: "sedan",
//       amount: 13,
//       price: 22120,
//       onSale: true,
//     },
//     {
//       make: "Ford",
//       modcar: "Explorer",
//       type: "suv",
//       amount: 10,
//       price: 31660,
//       onSale: false,
//     },
//   ];
//   Нехай функція makeCarsWithDiscount повертає новий масив об'єктів
//    із змінним значенням властивості price залежно від переданої знижки
// const makeCarsWithDiscount =(cars, discount ) =>
//     cars.map((car) => {
//         car.price -=car.price * discount;
//         return car; 

// });
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// !|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => cars.filter(car => car.price<threshold)
// // return car;

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// !||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = (cars) => cars.filter((car) => car.onSale === true);

// console.table(getCarsWithDiscount(cars));
// !||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter(car => car.type ===type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = cars => cars.sort((a, b)=>a.amount-b.amount);

// console.table(sortByAscendingAmount(cars));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // Напишіть код, щоб видалити всі елементи в заданому масиві
// // Функція `deleteElement()` видаляє всі входження елемента із заданого масиву.
// // 
// const num = [1, 2, 3, 5, 8, 10, 15, `Hello`];
//  function deleteElement(element) {
// const now = num.indexOf(element)
// console.log(now);
// num.splice(now, 1);


//  };
//  deleteElement(5);
// console.log(num);



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Напишіть метод, який розбиває масив на частини визначеного розміру

// const data = [1, 2, 3, 4, 5, 6, 7];


// const chunkArray = (arr, devider) => {
//   let index = 0;
// const newArray = [];
//   while (index < 0) {
// const chuk = arr.spise(index, devider+index)
//   }
//   return newArray;
// }
// console.log(chunkArray(data, 3)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunkArray(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]


                                                                                                                                                             
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const customer ={
//     firstName: "Mark",
//     lastName: "Soper",
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     };

//     function makeMessage(callback) {
//         console.log(`Обробляємо заявку від ${callback()}.`);
//     }

//     makeMessage(customer.getFullName.bind(customer));

// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const total = this.stones.find((stone) => stone.name ===stoneName);
//     return total.price * total.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Напишите функции для работы с coursesколлекцией обучающих курсов:

// addCourse(name)- добавляет курс в конец коллекции
// removeCourse(name)- удаляет курс из коллекции
// updateCourse(oldName, newName)- меняет имя на новое
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // ' You already have this course'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Course with this name was not found'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

//  function addCourse(name) {
//    if (courses.includes(name)) {
//    console.log(' You already have this course');
//    } else {
//     courses.push(name);
//    }
// }
//  addCourse(`ewe`);
//  addCourse(`CSS`);
//  addCourse('Express');
//  console.log(courses);

// function removeCourse(name)  {
//     if (!courses.includes(name)) {
//         console.log('Course with this name was not found');
//     }
// const index = courses.indexOf(name) ;
//     courses.splice(index, 1)
//  }
    

// removeCourse(`HTML`);
// removeCourse(`dgdgd`)
// console.log(courses);

// function updateCourse(oldName, newName) {
//     const newIndex = courses.indexOf(oldName);
//     courses.splice(newIndex, 1, newName);
    
// };

// updateCourse('Express', 'NestJS');
// console.log(courses);

// class Car {
//     constructor({brand, model, price} = {}) {
//         this.brand = brand;
//         this._model = model;
//         this._price = price;
//     }
//     get model() {
//         return this._model;
//     }
//     set model(newModel) {
//         this._model= newModel;
//     }
//     get price() {
//         return this._price;
//     }
//     set price(newPrice) {
//         this._price = newPrice;
//     }
// }
// const myCar = new Car ({
//     brand: `Audi`,
//     model: `Q3`,
//     price: 35000,
// });

// const myCar1 = new Car ({
//     brand: `BMW`,
//     model: `X6`,
//     price: 50000,
// });

// const myCar2 = new Car (
 
// );

// console.log(myCar);
// console.log(myCar1);
// console.log(myCar2);
// console.log(Object.getPrototypeOf(myCar));
// myCar.model = `Volvo`
// console.log(myCar);
// myCar1.price = 500000000;
// console.log(myCar1);



// class Hero extends Car {

// constructor(brand, model, price, config) {
//     super(brand, model, price);

// this.config = config;
// }
// }
// const mango = new Hero(brand= `Mango`, `Poly`, 10000, 11111); 
// console.log(mango);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// class Rectangle {
//     constructor(height, width){
//         this.name = "Rectangle";
//         this.height = height;
//         this.width = width;
//     }
//     sayName() {
//         console.log("Hi, I am a", this.name + ".");
//     }
//     get area() {
//         return this.height * this.width;
//     }
//     set area(value){
//         this.area = value;
//     }
// }

// class Square extends Rectangle {
//     constructor(length) {
//         super(length, length);
//         this.name = "Square"
//     }
// }

// const square = new Square(10);
// console.log(square);
// square.sayName();
// console.log(square.area);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Напишите клас Toggle, который приймает об'єкт налаштувань {isOpen: boolean}и охватывает одну власть on- стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//     constructor(settings) {
//         this.on = settings?.isOpen || false;
//     }
//     toggle() {
//             this.on = !this.on; // this.on = !this.on -> this.on = !true -> this.on = false
//           }
// }


// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Напиши клас User який cтворює об'єкт із властивям login та email. Оголоси приватні властивости #loginта #email, доступ до яких зроби через гетер та сетер loginта email.

// class User {
//     #login;
//     #email;
//     constructor({login, email}) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login(){
//         return this.#login
//     }
//     set login(newLogin){
//        this.#login = newLogin;
//     }

//     get email(){
//         return this.#email
//     }
//     set email(newEmail){
//        this.#email = newEmail;
//     }
    
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Напиши клас Blogger для создания об'єкта блогера с наступними властями:

// email- пошта, рядок
// age- век, число
// numberOfPosts- количество постов, число
// topics- масив тем на яких спеціалізує блогер
// Клас одной чекає один параметр - об'єкт налаштувань зменними силовыми установками.

// Ежедневный метод getInfo(), самый быстрый, проверенный ряд: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Добавочный метод updatePostCount(value), который имеет параметр, valueприбавляет количество постов, которые можно добавлять вручную.

// class Blogger {
//     constructor({name, age, numberOfPosts, topics}) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
       
//     }
// }

// const mango = new Blogger({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».
//
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function camelize(str, callback) {
//     return str
//       .split("-")
//       .map((item, index) => (index === 0 ? item : callback(item)))
//       .join("");
//   }
//   console.log(camelize("background-color", toUpperFirstLetter));
//   console.log(camelize("list-style-image", toUpperFirstLetter));
//   console.log(camelize("-webkit-transition", toUpperFirstLetter));
  
//   function toUpperFirstLetter(str) {
//     return str[0].toUpperCase() + `${str.slice(1)}`;
//   }
  

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2


// function each(array, callback) {
//     const resultArr = [];
//     for (let i = 0; i < array.length; i++) {
//       const newItem = callback(array[i]);
//       resultArr.push(newItem);
//     }
//     return resultArr;
//   }
  
//   console.log(each([1,2,3], (num) => num*2));
//   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Напишіть дві функції
  // makeProduct(назва, ціна, callback) - приймає
  // ім`я і ціну товару, а також функцію callback.
  // Функція створює об'єкт товару, додає йому унікальний
  // ідентифікатор у властивості id і викликає зворотний виклик
  // передаючи йому створений об’єкт.
  // showProduct(product) - callback приймає об'єкт
  // продукта і виводить його в консоль
//   function makeProduct(name, price, callback) {
//      const product = {
//        name,
//        price,
//        id: Date.now(),      
//       }
//    callback(product)
//   }
// function showProduct(product){
//     console.log(product);
  
// }
// makeProduct(`mango`, 500, showProduct);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// function makeShef (shefName){
//     return function makeDish(dish) {
//         console.log(`${shefName} is cooking ${dish}`);
//     }
// }
// const mango = makeShef("Mango");
// mango(`apple pie`);
// mango(`fish`);

// const polly = makeShef("Polly");
// polly(`cocke`);

// makeShef(`Alex`)(`meet`);

// Напишіть функцію makeCounter, яка повертає об'єкт із такими методами
// increment - збільшує counter на 1
// decrement - зменшує counter на 1
// getValue - повертає значення counter

// function makeCounter() {
//     let counter = 2;
  
//     return {
//       increment: () => (counter += 3),
  
//       decrement: () => (counter -= 1),
  
//       getValue: () => counter,
//     };
//   }
  
//   const counter = makeCounter();
  
//   counter.increment();
//   counter.increment();
//   counter.increment();
  
//   counter.decrement();
//   counter.decrement();
  
//   console.log(counter.getValue());
  
//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.

// function saveDiscount(discount) {
//     return function makeDiscount(sum) {
//       return sum - sum * (discount / 100);
//     }
//   }
  
//   const premium = saveDiscount(50);
//   const season = saveDiscount(30);
//   const current = saveDiscount(10);
  
//   console.log(premium(1500));
//   console.log(season(900));
//   console.log(current(650));


//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається

// function savePassword(password) {
//     return function (userPassword) {
//       return password === userPassword;
//     }
//   }
  
//   const checkPassword = savePassword("mypass");
  
//   console.log(checkPassword);
  
//   console.log(checkPassword("notmypass"));
  
//   console.log(checkPassword("mypass"));
  
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// / Виправте помилки, щоб код працював

// const jeans = {
//     price: 500,
//     showPrice() {
//         console.log(this.price);
//     },};

//     jeans.showPrice();

//     const phone = {
//         price: 1000,
//     };

//     phone.showPrice = jeans.showPrice;
//     phone.showPrice();
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Виправте помилки, щоб код працював

// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price);
//     },};

    
//         function callAction(action) {
//             action();
//         }

//         callAction(product.showPrice.bind(product));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Зробіть так, щоб код працював
// const user = {
//     name: 'Jhon',
//     showName() {
//         console.log(this.name);
//     }}
    
//     setTimeout(user.showName.bind(user), 1000)

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // Потрібно викликати функцію showPrice так, щоб this вказував на об'єкт 
    
    // function showPrice() {
    //     console.log(this.price);
    // }
    // const laptop = {
    //     price: 1500
    // }
    // showPrice.call(laptop);
    // showPrice.apply(laptop)
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

   // Даний об'єкт counter. Напишіть до нього getter та setter
   
//    const counter = {
//     _count: 3,

//     get count() {
//      return this._count;
//     },
//     set count(num) {
//     return this._count = num
//     }
// }

// console.log(counter._count);
// counter._count= 5
// console.log(counter._count);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Напиши клас Client який створює об'єкт//з властивостями login email//Оголоси приватні властивості #login #email,//доступ до яких зроби через геттер та сеттер login email

// class Client {
//     #login;
//     #email;
//     constructor(login,email){
// this.#login = login;
// this.#email = email;
//     }

//     get showLogin() {
// return this.#login
//     }

//     set showLogin(value) {
//          this.#login = value;
//             }

// }
// const user = new Client(`mailsss`, `fgfhfgfh`)
// console.log(user.login);
// user.login = `hello`;
// console.log(user.login);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Створіть об'єкт calculator із такими методами//read() - зчитує через promp чило, оператор та наустпне число
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() ділить збережені значення та повертає результат
// const calculator = {// read() {},// sum() {},// min() {},// mult() {},// div() {},
// parseString(originalString) {// const [firstOperand, operator, secondOperand ] = originalString.replaceAll(" ", "").split(/(\D)/);//// return {// firstOperand,// secondOperand,// operator,// };// }// };

//    const calculator = {
//         read() {
//          const input = prompt(`Enter number, operator, number`);
//          const parseInput = this.parseString(input);
//          console.log(parseInput);
//          console.log(this.calculate(parseInput));
//         },
//           sum(a, b) {
//             return Number(a) + Number(b);
//           },
//           min(a, b) {
//             return Number(a) - Number(b);
//           },
//           mult(a, b) {
//             return Number(a) * Number(b);
//           },
//           div(a, b) {
//             return Number(a) / Number(b);
//           },
//           parseString(originalString) {
//             const [firstOperand, operator, secondOperand] = originalString.replaceAll(" ", "").split(/(\D)/);

//             return {
//                 firstOperand,
//                 secondOperand,
//                 operator,
//             };
//         },
//             calculate(parsetInput) {
//                 const { firstOperand, operator, secondOperand } = parsetInput;
//                 switch (operator) {
//                     case "+":
//                     return this.sum(firstOperand, secondOperand);

//                     case"-":
//                     return this.min(firstOperand, secondOperand);

//                     case"*":
//                     return this.mult(firstOperand, secondOperand);

//                     case"/":
//                     return this.div(firstOperand, secondOperand);

//                 }
//             },
//         };
//         calculator.read();
        
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   

  