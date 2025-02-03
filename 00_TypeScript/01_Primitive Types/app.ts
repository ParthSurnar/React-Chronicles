// Primitive Types in TypeScript

// 1. string - Represents text values

let userName: string = "Parth"; // String literal using double quotes
let greeting: string = 'Hello, World!'; // String literal using single quotes
let templateString: string = `Hello, ${userName}!`; // String literal with template syntax

console.log(userName); // Output: Parth
console.log(greeting); // Output: Hello, World!
console.log(templateString); // Output: Hello, Parth!


// 2. number - Represents numeric values

let age: number = 25; // Positive number
let weight: number = -75; // Negative number
let temperature: number = 98.6; // Decimal number

console.log(age); // Output: 25
console.log(weight); // Output: -75
console.log(temperature); // Output: 98.6

// 3. boolean - Represents a true/false value

let isPresent: boolean = true; // Boolean value true
let isAbsent: boolean = false; // Boolean value false

console.log(isPresent); // Output: true
console.log(isAbsent); // Output: false

// 4. null - Represents a deliberate absence of a value

let data: null = null; // Null value
console.log(data); // Output: null

// 5. undefined - Represents an uninitialized value

let value: undefined = undefined; // Undefined value
console.log(value); // Output: undefined


// 6. symbol - Represents a unique, immutable identifier

let id: symbol = Symbol("id"); // Symbol value with description
console.log(id); // Output: Symbol(id)

// 7. any - Represents any value

let randomValue: any = 10; // Number value
randomValue = true; // Boolean value

console.log(randomValue); // Output: true

// 8. bigint - Represents large integers

let largeNumber: bigint = 1234567890123456789012345678901234567890n; // Append 'n' to create a bigint
let anotherLargeNumber: bigint = BigInt("1234567890123456789012345678901234567890");

console.log(largeNumber); // Output: 1234567890123456789012345678901234567890n
console.log(anotherLargeNumber); // Output: 1234567890123456789012345678901234567890n

// Code Example with All Primitive Types:

let userName2: string = "Parth"; // String type
let age2: number = 25; // Number type
let isActive: boolean = true; // Boolean type
let empty: null = null; // Null type
let value2: undefined = undefined; // Undefined type
let uniqueId: symbol = Symbol("id"); // Symbol type
let largeNumber2: bigint = 1234567890123456789n; // Bigint type

console.log(userName2, age, isActive, empty, value, uniqueId, largeNumber);



