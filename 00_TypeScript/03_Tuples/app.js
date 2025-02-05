"use strict";
// Tuples in TypeScript 🎯
// What are Tuples?
// Tuples are fixed-length arrays where each element has a specific type.
// The order and types of elements must be maintained.
// Basic tuple example
let user1 = ['John', 25];
console.log(user1[0]); // 'John'
console.log(user1[1]); // 25
// Tuple with optional element
let person = ['Alice']; // Second element is optional
// Tuple with readonly
const user2 = ['Bob', 30];
// user2[1] = 40; // ❌ Error: Cannot modify readonly tuple
// Tuple with rest elements
let colors = ['red', 'blue', 'green'];
console.log(colors); // ['red', 'blue', 'green']
// Tuple with Labels (for better readability)
let user3 = ['Alice', 25];
console.log(user3[0]); // 'Alice'
// (Just makes it clearer what each value represents.)
// Tuple with push() (Yes, but be careful!)
let data = ['Score', 100];
data.push(200); // ✅ No error, but breaks the expected structure
console.log(data); // ['Score', 100, 200]
// (Tuples don’t fully prevent extra elements being added after declaration! 💀)
// Tuple Destructuring
let person2 = ['Bob', 30];
let [name2, age2] = person2;
console.log(name2, age2); // 'Bob', 30
// Tuple Inside an Array
let people = [
    ['Alice', 25],
    ['Bob', 30],
    ['Charlie', 28]
];
