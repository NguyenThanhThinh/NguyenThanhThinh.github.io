﻿---
title: JavaScript (ESNEXT)
categories: [js]
image: assets/img/js.png
language: js
description : JavaScript (ESNEXT)
tags: [js]
---

# JavaScript (ESNEXT)

## 🔶 JavaScript let

The let keyword allows you to declare a variable with block scope.

```js
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
```

## 🔶 JavaScript const

The const keyword allows you to declare a constant (a JavaScript variable with a constant value).

Constants are similar to let variables, except that the value cannot be changed.

```js
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10
```

## 🔶 Arrow Functions

Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

Arrow functions do not have their own this. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always a constant value.

```js
// ES5
var x = function (x, y) {
  return x * y;
};

// ES6
const x = (x, y) => x * y;

// or
const x = (x, y) => {
  return x * y;
};
```

## 🔶 The For/Of Loop

The JavaScript for/of statement loops through the values of an iterable objects.

for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

**🔹Looping over an Array**

```js
const cars = ['BMW', 'Volvo', 'Mini'];
// Method 1:
for (let car of cars) {
  console.log(car);
}

// Method 2:
for (let i in cars) {
  console.log(cars[i]);
}
```

**🔹Looping over a String**

```js
let language = 'JavaScript';
let text = '';

for (let x of language) {
  text += x + ' ';
}
```

**🔹Looping over properties of an Object:**

```js
const person = { fname: 'John', lname: 'Doe', age: 25 };

let text = '';
for (let x in person) {
  text += person[x];
}
```

**🔹Array.forEach()**

The forEach() method calls a function (a callback function) once for each array element.

```js
const numbers = [45, 4, 9, 16, 25];

let txt = '';
numbers.forEach((value, index) => {
  console.log(value);
});
```

## 🔶 JavaScript Maps

> Learn more about Set objects in the the chapter: [JavaScript Maps](https://www.w3schools.com/js/js_object_maps.asp).

- A Map holds key-value pairs where the keys can be any datatype.
- A Map remembers the original insertion order of the keys.
- A Map has a property that represents the size of the map.

```js
// Create Objects
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Create a new Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
```

## 🔶 JavaScript Sets

> Learn more about Set objects in the the chapter: [JavaScript Sets](https://www.w3schools.com/js/js_object_sets.asp).

```js
// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add('a');
letters.add('b');
letters.add('c');
```

## 🔶 JavaScript Classes

> Learn more about classes in the the chapter: [JavaScript Classes](https://www.w3schools.com/js/js_classes.asp).

- JavaScript Classes are templates for JavaScript Objects.
- Use the keyword class to create a class.
- Always add a method named constructor():

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
```

> A JavaScript class is not an object.
>
> It is a template for JavaScript objects.

**🔹Using a Class**

```js
const myCar1 = new Car('Ford', 2014);
const myCar2 = new Car('Audi', 2019);
```

## 🔶 JavaScript Promises

- A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".
- "Producing Code" can take some time and "Consuming Code" must wait for the result.

```js
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('I love You !!');
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById('demo').innerHTML = value;
});
```

## 🔶 Default Parameter Values

ES6 allows function parameters to have default values.

```js
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
```

## 🔶 Function Rest Parameter

The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

```js
function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }

  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```

## 🔶 String.includes()

The includes() method returns true if a string contains a specified value, otherwise false:

```js
let text = 'Hello world, welcome to the universe.';
text.includes('world'); // Returns true
```

## 🔶 String.startsWith()

The startsWith() method returns true if a string begins with a specified value, otherwise false:

```js
let text = 'Hello world, welcome to the universe.';

text.startsWith('Hello'); // Returns true
```

## 🔶 String.endsWith()

The endsWith() method returns true if a string ends with a specified value, otherwise false:

```js
var text = 'John Doe';
text.endsWith('Doe'); // Returns true
```

## 🔶 Array.from()

The Array.from() method returns an Array object from any object with a length property or any iterable object.

```js
Array.from('ABCDEFG'); // Returns [A,B,C,D,E,F,G]
```

## 🔶 Array keys()

The keys() method returns an Array Iterator object with the keys of an array.

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const keys = fruits.keys();

let text = '';
for (let x of keys) {
  text += x + '<br>';
}
```

## 🔶 Array find()

The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of ) the first element that is larger than 18:

```js
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((value, index, array) => {
  return value > 18;
});
```

> **Note that the function takes 3 arguments:**
>
> - The item value
>
> - The item index
>
> - The array itself

## 🔶 Array findIndex()

The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:

```js
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

> **Note that the function takes 3 arguments:**
>
> - The item value
>
> - The item index
>
> - The array itself

## 🔶 JavaScript Array.includes()

ECMAScript 2016 introduced Array.prototype.includes to arrays. This allows us to check if an element is present in an array:

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

fruits.includes('Mango'); // is true
```

## 🔶 Modules

> Learn more about Modules in: [JavaScript Modules](https://www.w3schools.com/js/js_modules.asp).

Modules are imported in two differen ways:

**🔹Import from named exports**

```js
import { name, age } from './person.js';
```

**🔹Import from default exports**

```js
import message from './message.js';
```

## 🔶 JavaScript Async Functions

```js
async function myDisplay() {
  let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
      myResolve('I love You !!');
    }, 3000);
  });
  document.getElementById('demo').innerHTML = await myPromise;
}

myDisplay();
```

## 🔶 JavaScript Asynchronous Iteration

ECMAScript 2018 added asynchronous iterators and iterables.

With asynchronous iterables, we can use the await keyword in for/of loops.

```js
for await () {}
```

## 🔶 JavaScript Promise.finally

ECMAScript 2018 finalizes the full implementation of the Promise object with Promise.finally:

```js
let myPromise = new Promise();

myPromise.then();
myPromise.catch();
myPromise.finally();
```

## 🔶 JavaScript Object Rest Properties

ECMAScript 2018 added rest properties.

This allows us to destruct an object and collect the leftovers onto a new object:

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }
```