// ===================================================
// 🔹 7️⃣ FUNCTION OVERLOADING
// ===================================================
// A function can have multiple signatures but one implementation.

function getData(id: number): string;
function getData(name: string): string;
function getData(value: number | string): string {
  return `Fetching data for: ${value}`;
}

console.log(getData(101)); // ✅ Output: Fetching data for: 101
console.log(getData("Parth")); // ✅ Output: Fetching data for: Parth

// 🚀 Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// console.log(getData(true)); // ❌ Error

// The `getData` function has two signatures:

// 1. `getData(id: number): string`
// 2. `getData(name: string): string`

// The implementation of the function is the third signature:
// `getData(value: number | string): string`
// The function returns a string with the value passed to it.

// When calling the function, TypeScript determines the correct signature based on the argument type.
// The function implementation is the same for both signatures.
// The function returns a string with the value passed to it.
// The function can accept either a number or a string as an argument

// example of error
// getData(true); // ❌ Error
 

// 📚 Learn More
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads