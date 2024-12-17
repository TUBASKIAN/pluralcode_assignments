//  var name = 'joel'
 
//  for (i=1; i <=100; i++) {
//     console.log(i, name)
//  }

//  uses of var variable

// for initialising a varaible
// var myName;

// for reassigning
// myName = 'temi'
// console.log(myName)

// for redeclaring
// var myName = 'joel'
// console.log(myName)

// uses of let variable

// for initialising and reassigning

// let age; // initialising without a value 

// age = 23 // reassigning
// console.log(age)

// string examples
// let myNumStr = '23';
// let myStr = 'Joel';
// let greet = ', How are you?';

// string concatenation
// console.log(myStr + greet);

// let myName = 'Joel';
// let myAge = '20';

// console.log(
//     "Hello, my name is " + myName + " and I am " + myAge + " years old"
// );

// usage of backticks

// console.log(`Hello, my name is ${myName} and I am ${myAge} years old.`);

// accessing string characters using it s index
// let myStr = 'abcdef';

// console.log(myStr[0]);

// getting the last character of a string
// console.log(myStr[myStr.length - 1]);
// the syntax inside the square bracket is to calculate the string length and the syntax calling the variable outside outputs the character index of the string

// NUMBER
// let x = 20;
// let y = 60;

// let z = x + y;
// z = y - x;
// z = y * x;
// z = y / x;
// z = y % x;
// z = x ** y;
// z = (x + y) ** 2;
// console.log(z);

// BOOLEAN

// let isMarried = true;

// if (isMarried) {
//     console.log(' you are welcome to the party');
// } else {
//     console.log('too young, go home!');
// }

// let age = 18;

// if (age > 17) {
//     console.log('you are welcome to the party');
// } else {
//     console.log('too young, go home!');
// }

// NULL
// let children = null;

// console.log(children);

// UNDEFINED
// let myBestFriend;

// console.log(myBestFriend);

// REFERENCE DATA TYPES
// array
// let studentScore = [20, 45, 33, 58, 23];

// console.log(studentScore[studentScore.length - 1]);

// used to store multiple data types but not descriptive, i.e without labels
// best used when data type is the same thing
// let myArr = [
//     'joel',
//     true,
//     45,
//     'joelgbemisola72@gmail.com',
//     null,
//     ['coding', 'digital creator', 'designer']
// ];

// console.log(myArr);

// use objects for a more descriptive multiple data type usage

// let user1 = {
//     name: 'Joel',
//     isMarried: true,
//     age: 45,
//     email: 'joelgbemisola72@gmail.com',
//     kids: null,
//     hobbies: ['coding', 'digital creator', 'designer'],
//     greet: function () {
//         return 'My name is ' + this.name;
//     },
// };

// console.log(user1.greet());

// console.log(typeof studentScore)
// console.log(typeof user1)

// accessing the elements of an object
// console.log(user1['hobbies'][0]);
// // using dot method
// console.log(user1.hobbies[user1.hobbies.length - 1]); 

// FUNCTION
// syntax
// function functionName(){
//     return
// };

// function greet() {
//     return 'Hello world!';
// };

// console.log(greet());

// function with parameters and arguements
// function greet(name, time) {
//     return 'Hello ' + name + ' Good ' + time; 
// }

// console.log(greet('Joel', 'Afternoon'));
// console.log(greet('Temi', 'Evening'));

// task: function that outputs the sum of two numbers

// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(23, 25));

// task: write a function that calculates
// the area of a circle

// bidmas = bracket, index, division, multiplication, addition and subtraction

// function area(radius) {
//     let pi = 3.142;
//     return pi * radius ** 2;
// }

// function calcArea(radius) {
//     let pi = 3.142;
//     let area = pi * radius ** 2;
//     return area;
// }


// console.log(calcArea(5));

// prompts and alert

// function area(r) {
//     let pi = 3.142;
//     return pi * r ** 2;
// }

// alert('Welcome to my area calculator app');
// let r = prompt('Please eter a radius');
// alert('The area of a circle whose radius is ' + r + ' is ' + area(r));

// ASSINMENT OPERATORS

// let x = 31;

// let z = x + 3; // correct for algebra and js

// x = x + 3; // correct for js alone
// x += 3; // correct for js alone
// x -= 3; // correct for js alone
// x *= 3; // correct for js alone
// x **= 3; // correct for js alone
// x /= 3; // correct for js alone
// x %= 2; // correct for js alone

// console.log(x);

// COMPARISON OPERATORS

// let age = 18;

// if (age == '18') {
//     console.log('you are welcome to the party');
// } else {
//     console.log('too young, go home!');
// }

// task: create a function that ensures that the user's password has a
// minimum length of 8 characters, else, return false

// let password = prompt('enter your password');

// console.log(password)

// if (password.length == 8) {
//     alert('Correct Password!');
// } else {
//     alert('Password too short! Must be minimum of 8 characters.');
// };

// LOGICAL OPERATORS

// logical and(&&)
// let myName = 'Joel';
// console.log(5 > 3 && myName.length == 4 && 20 > 60);

// // logical OR (||)
// console.log(5 > 3 || myName.length > 4 || 20 > 60);

// let username = prompt('enter your username');
// let password = prompt('enter your password');

// if (!username || !password) {
//     console.log('no info to show!');
// } else {
//     console.log(`welcome ${username}`);
// }

// CONTROL FLOW

// if, else ifn else statements
// if statement syntax

// if (condition) {
//     codeblock;
// }

// if (age == 18) {
//     console.log('welcome to the party');
// }

// if else

// if (age == 28) {
//     console.log('welcome to the party');
// } else {
//     console.log('too young, go home!')
// }

// if, else if and else
// if (age >= 18) {
//     console.log('welcome to the party');
// } else if (age >= 16) {
//     console.log('go to teenage party');
// } else if (age >= 10) {
//     console.log('go to children party');
// } else {
//     console.log('go to bed!');
// }

// let color = 'pink';

// if (color === 'blue') {
//     console.log('your color is blue');
// } else if (color === 'red') {
//     console.log('your color is red');
// } else if (color === 'green') {
//     console.log('your color is green');
// } else {
//     console.log('does not match');
// }

// tenary operators
// use of ? and :

// let y = 6; 

// if (y > 3) {
//     console.log('y is greater than 3');
// } else {
//     console.log('not true for that');
// }

// instead, using tenary operator

// console.log(y > 3 ? 'y is greater than 3' : 'not true for that');

// SWITCH STATEMENTS

// let color = 'blue';

// switch (color) {
//     case 'blue':
//         console.log('your color is blue');
//         break;
//     case 'red':
//         console.log('your color is red');
//         break;
//     case 'green':
//         console.log('your color is green');
//         break;
//     default:
//         console.log('your color cannot be found!');
//         break;
// }

// LOOPS
// for, while, and do while loop
// for loop syntax

// for (condition) {
//     codeblock;
// }

// for (initializer; boundary; increment) {
//     codeblock;
// }

// for (i = 0; i <= 20; i++){
//     console.log(i);
// }

// while loop syntax
// syntax

// while (condition) {
//     codeblock;
//     increment;
// }

// let i = 0;

// while (i <= 20) {
//     console.log(i);
//     i++;
// }

// do while loop
// syntax
// do {} while {condition};

// i = 0;

// do {
//     console.log(i)
//     i++;
// } while (i <= 10);

// for (i = 1; i <= 10; i++) {
//     if (i == 7) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// even numbers
// for (i = 1; i <= 20; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (i = 0; i <= 20; i += 2){
//     console.log(i);
// }

// odd numbers
// for (i = 1; i <= 20; i++){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// for (i = 1; i <= 20; i += 2){
//     console.log(i);
// }

// naira to dollar converter

// function nairaToDollar() {
//     let dollar = 1600;
//     let amount = prompt('enter amount of dollars to convert to naira:');
//     return dollar * amount;
// }

// console.log(nairaToDollar());

// kelvin to celcius temperature converter
// c = k - 273.15

// let kelvin = prompt('enter a value of kelvin temperature:')

// function kelvinToCelcius() {
//     let celcius = kelvin - 273.15;
//     return celcius;
// }

// console.log(kelvinToCelcius());


// a function that uses the almighty formula to solve quadratic equations

// x = -b +/- √b**2 - 4ac / 2a

// let a = prompt('enter value for a');
// let b = prompt('enter value for b');
// let c = prompt('enter value for c');

// function calcQuadractic() {
//     let determinant = b**2 - (4 * a * c);
//     // let sqrDet = Math.sqrt(determinant);
//     let sqrDet = (determinant) ** 0.5;
//     let divSqrDet = sqrDet / 2 * a;
//     let solve1 = -b + divSqrDet;
//     let solve2 = -b - divSqrDet;
//     return solve1, solve2;
// }

// console.log(calcQuadractic());

// LOOPING THROUGH ARRAYS

// let myArr = ['Merlin', 'Arthur', 'Lancelot', 'Gwain', 'King'];

// myArr.push('Lyon', 'Percieval');

// console.log(myArr);

// // using the for loop

// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }

// using the while loop

// let i = 0;
// while (i < myArr.length) {
//     console.log(myArr[i]);
//     i++;
// }

// for of loop
// for (let i of myArr) {
//     console.log(i);
// }

// for in loop
// for (let i in myArr) {
//     console.log(i); // outputs index only
//     console.log(myArr[i]); // outputs array elements
//     // both output index and array elements accordingly
// }

// let person = {
//     name: 'Joel',
//     isMarried: true,
//     age: 45,
//     email: 'joelgbemisola72@gmail.com',
//     kids: null,
//     hobbies: ['coding', 'digital creator', 'designer'],
//     greet: function () {
//         return 'My name is ' + this.name;
//     },
// };

// for ( let i in person){
//     console.log(person[i])
// }

// the for of loop dosen't work for objects only strings
// for ( let i of person){
//     console.log(person[i])
// }

// using for of loop to loop through a string
// let firstName = 'Joel';

// for ( let i of firstName){
//     console.log(i)
// }

// FUNCTIONS

// regular and arrow functions

// regular function syntax
// function greet() {
//     // codeblock
// }

// function greet(location) {
//     return `Hello ${location}!`;
// }

// const greetMe = greet('World');
// const greetMe2 = greet();

// console.log(greetMe);
// console.log(greetMe2);

// function without parameters

// function greet() {
//     return `Hello World!`;
// }

// const greetMe = greet();

// console.log(greetMe);

// function with parameter(s)
// function greet(location) {
//     return `Hello ${location}!`;
// }

// const greetMe = greet('World');

// console.log(greetMe);

// two params
// function greet(name, time) {
//     return `Hello ${name}, good ${time}`;
// }

// const message = greet('Joel', 'Morning');

// console.log(message);

// default parameter values
// function greet(name = 'temi', time = 'evening') {
//     return `Hello ${name}, good ${time}`;
// }

// const message = greet('Joel', 'Morning');

// console.log(message);

// arrow functions

// anonymous function
// const greet = function() {
//     return 'Hello';
// }

// console.log(greet());

// let greet = () => {
//     return 'Hello World';
// };

// short form
// let greet = () => 'Hello World';

// let greet = (name) => `Hello ${name}`;
// let greet = (name, time) => `Hello ${name}, good ${time}`;
// let greet = (name = 'Temi', time = 'Evening') => `Hello ${name}, good ${time}`;

// let greetMe = greet('Joel', 'Morning');

// console.log(greetMe);

// write a function that takes a number and returns all the 
// even number between zero and that number

// function even(num = 10) {
//     for(let i = 0; i <= num; i += 2){
//         console.log(i);
//     }
//     return num;
// }

// function even(num) {
//     for(let i = 0; i <= num; i++){
//         if (i % 2 === 0)     
//         console.log(i);
//     }
//     return num;
// }

// function even(num) {
//     let evenArr = [];
//     for(let i = 0; i <= num; i++){
//         if (i % 2 === 0)     
//         evenArr.push(i);
//     }
//     return evenArr;
// }

// const evenNum = even(10);

// console.log(evenNum)

// map and for each method

// let myArr = ['Merlin', 'Arthur', 'Lancelot', 'Gwain', 'Elion'];

// myArr.forEach((name, i) => {
//     console.log(i + 1 + ' - ' + name)
// });

// myArr.map((name, i) => {
//     console.log(i + 1 + ' - ' + name)
// });

// LOCAL AND GLOBAL SCOPES

// local scope

// function myName(name) {
//     let time = 'afternoon';
//     return `Hello ${name}, good ${time}`
// }

// console.log(myName('Joel'));

// global scope
// let time = 'afternoon';

// function myName(name) {
//     return `Hello ${name}, good ${time}`
// }

// console.log(myName('Joel'));

// hoisting

// x = 23;

// console.log(x);

// var x;

// closure - nesting functions in functions
// function createGreeting(name) {
//     return function () {
//         console.log(`Hello ${name} good day`)
//     };
// }

// // createGreeting('Joel')();

// const greet = createGreeting('Joel');;

// greet();

// function outerFunc(outerVar) {
//     return function innerFunc(innerVar) {
//         console.log('outervar ' + outerVar);
//         console.log('innerVar ' + innerVar);
//     };
// }

// const x = outerFunc('Joel');
// x('Temi');

// ARRAYS - there are 2 types
// square brackets
// array  contructory function/method

// square bracket
// let myArr = [];

// myArr.push('Joel');
// myArr.push('Temi');

// console.log(myArr);

// array constructory method
// let myArr = new Array('Jo', 'El', 'Te', 'Mi');
// myArr.push('Gb', 'Ola')
// myArr.push('Em')
// console.log(myArr);


// let myFruits = [];

// push adds to the end of an array
// myFruits.push('Mango', 'Orange');

// console.log(myFruits);

// pop removes from the end of an array
// myFruits.pop();
// myFruits.pop();

// console.log(myFruits);

// unshift adds to the beginning of an array
// myFruits.unshift('Apple', 'Pear');

// console.log(myFruits);

// shift removes from the beginning of an array

// myFruits.shift();
// myFruits.shift();
// console.log(myFruits);

// let myFruits = ['orange', 'apple', 'lemon', 'guava', 'citrus', 'banana'];

// console.log(myFruits);

// let slicedArr = myFruits.slice(0, 3); // (first and lastIndex - 1)

// console.log(slicedArr);
// console.log(myFruits);

// let splicedArr = myFruits.splice(0, 3); // (first and lastLength - 1)

// console.log(splicedArr);
// console.log(myFruits);

// myFruits.splice(2, 1, 'carrot');
// the splice can remove or add to any position in an array

// console.log(myFruits);

// filters in array

// let result = myFruits.filter((fruit) => fruit !== 'guava');

// console.log(result);

// filtering an array using the for loop

// let result = [];
// for (let i = 0; i < myFruits.length; i++) {
//     if (myFruits[i] !== 'guava') {
//         result.push(myFruits[i]);
//     }
// }

// console.log(result);

// reduce method - adds all the element of an array
let scores = [60, 57, 99, 67];

// let total = scores.reduce((a, b) => a + b); // b is an accumulator, a is an individual number
// console.log(total)

// adding the elements of an arrayb using the for loop

// let acc = 0;
// for (let i = 0; i < scores.length; i++) {
//     // acc = acc + scores[i]
//     acc += scores[i];
// }

// console.log(acc);

// sort - used to arrange an array in ascending or descending order

// ascending
// let asc = scores.sort((a, b) => a - b);
// console.log(asc)

// // descending
// let des = scores.sort((a, b) => b - a);
// console.log(des)

// let myScore = scores.find((x) => x === 99);
// let myScore = scores.findIndex((x) => x === 99);
// console.log(myScore);

// multi-dimensional array

// let multiDim = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ];

// console.log(multiDim);

// let reducedDim = multiDim.flat();

// console.log(reducedDim);

// excercise

// let fruitBasket = [];
// let request = prompt('Welcome! Do you wish to buy from us today? \nyes/no?');

// if (request !== 'yes') {
//     alert('Thanks for visiting!');

// } else if (request === 'yes') {

//     alert('Welcome to the FruitApp!');

//     let addDisQ = prompt('Do you wish to add or display or quit? \nchoose one.');

//     if (addDisQ === 'add') {

//         let fruit = prompt('enter a fruit you would like to add:');
        
//         if (fruit) {
//             fruitBasket.push(fruit);
//             console.log(`Fruit Basket: ${fruitBasket}`);
//             alert(`You added ${fruit}. Current basket: ${fruitBasket}`);

//         } else {
//             alert('No fruit was added.');
//         };

//     } else if (addDisQ === 'display') {
        
//         console.log(fruitBasket);

//     } else if (addDisQ === 'quit') {
//         alert('thanks for shopping with us today');
//     };

// } else {
//     alert('Thanks for visiting!');
// };

// OBJECTS

// let person = {
//     firstName: 'Joel',
//     lastName: 'Gbemisola',
//     email: 'joelgbemsiola72@gmail.com',
//     age: 55,
//     isAdmin: true,
//     isMarried: false,
//     kids: null,
//     school: 'pluralcode_academy',
//     courses: ['html', 'css', 'js'],
//     address: {
//         facebook: 'joelgbemisola',
//         twitter: 'joelgbemisola',
//         instagram: 'joelgbemisola',
//     },
// };

// ways of accessing the values of an object

// console.log(person.address.facebook);

// // adding values to an object

// person.level = 'advanced';
// person['remark'] = 'excellent';

// // changing the values of an object

// person.isMarried = 'true';

// // looping through an object using for in loop

// for (let i in person) {
//     console.log(i, person[i]);
// }

// destructuring an object

// const { firstName, lastName } = person;

// console.log(firstName, lastName);

// const person = {
//     name: 'Joel',
//     email: 'joelgbemisola72@gmail.com',
//     age: 55,
// };

// creating arrays using constructor method

// function Person(name, email, age) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.greet = () => `Hello my name is ${this.name}`
// }

// const person1 = new Person('Joel', 'joelgbemisola72@gmail.com', 55);
// const person2 = new Person('Tubaskian', 'tubaskiane@gmail.com', 20);

// console.log(person1, person2, person2.greet());

// SETS

// const mySet = new Set([1, 2, 3, 4, 5]);

// console.log(mySet);


