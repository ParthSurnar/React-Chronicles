"use strict";
// 1. Basic Array Declaration 💥
// In TypeScript, you can declare an array in two main ways:
// Using the type[] syntax:
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'mango'];
// Using the Array<type> syntax:
let numbersArray = [1, 2, 3, 4, 5];
let fruitsArray = ['apple', 'banana', 'mango'];
// Both ways are equally valid, but the type[] syntax is more common and widely used. You can choose based on your personal preference!
// 2. Array of Mixed Types ⚡
// Sometimes, you may want to have an array that holds elements of different types (though it's generally better to avoid this for better clarity). In TypeScript, you can declare an array that holds multiple types like this:
let mixedArray = ['apple', 10, 'banana', 20];
// Here, string | number means that the array can hold either a string or a number.
// 3. Tuple Arrays 🎯
// A tuple is a special type of array where each element has a specific type and order. The length of a tuple is fixed.
// Example:
let user = ['John', 25];
// Here, the first element is a string, and the second element is a number. Tuples are useful when you want to store a fixed number of elements with specific types.
// 4. Multi-Dimensional Arrays 🔢
// You can have arrays of arrays, or multi-dimensional arrays (like matrices in math).
// Example of a 2D array:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// You can also use the Array<type> syntax here:
let matrixArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// 5. Read-only Arrays 🚫
// Sometimes you might want to prevent modifications to an array. TypeScript provides read-only arrays which make it impossible to modify the array’s elements after it’s initialized.
let readonlyNumbers = [1, 2, 3, 4, 5];
// readonlyNumbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading.
// Or using ReadonlyArray:
let readonlyNumbersArray = [1, 2, 3, 4, 5];
// readonlyNumbersArray.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.
// 6. Array Methods 🔧
// TypeScript arrays come with all the typical JavaScript array methods, but with type safety. Some of the common methods are:
// push() – Adds elements to the end of an array.
// pop() – Removes the last element from an array.
// shift() – Removes the first element from an array.
// unshift() – Adds elements to the beginning of an array.
// map() – Creates a new array with the results of calling a function on every element in the original array.
// filter() – Creates a new array with all elements that pass a test.
// reduce() – Applies a function against an accumulator and each element to reduce it to a single value.
// Example:
let numbersToSquare = [1, 2, 3, 4, 5];
// Using map to square each number:
let squared = numbersToSquare.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]
// 7. Array Destructuring 🧩
// You can destructure arrays in TypeScript just like in JavaScript. This makes it easier to work with arrays and extract their values.
let numbersDestructuring = [10, 20, 30];
let [a, b] = numbersDestructuring;
console.log(a); // 10
console.log(b); // 20
// You can also use rest operator to collect remaining values:
let [first, ...rest] = numbersDestructuring;
console.log(first); // 10
console.log(rest); // [20, 30]
// 8. Iterating Over Arrays 🔄
// You can iterate over arrays using various methods. The most common are for, forEach(), and map().
// Using forEach():
let fruitsList = ['apple', 'banana', 'orange'];
fruitsList.forEach(fruit => {
    console.log(fruit); // Output: apple, banana, orange
});
// Using for-of loop:
for (let fruit of fruitsList) {
    console.log(fruit); // Output: apple, banana, orange
}
