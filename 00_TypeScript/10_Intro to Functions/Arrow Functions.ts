// ===================================================
// 🔹 8️⃣ ARROW FUNCTIONS (=>)
// ===================================================
// Arrow functions provide a shorter syntax.

const square = (num: number): number => num * num;

console.log(square(4)); // ✅ Output: 16

// 🚀 Arrow functions with multiple parameters
const sum2= (a: number, b: number): number => a + b;

console.log(sum2(10, 20)); // ✅ Output: 30

// 🚀 Arrow functions with no parameter
// Parentheses are required when there are no parameters.
const greet4 = (): string => "Hello, World!";
console.log(greet4()); // ✅ Output: Hello, World!

// 🚀 Arrow functions with block body
// Use curly braces for block body.
const greet5 = (): string => {
  return "Hello, World!";
};
console.log(greet5()); // ✅ Output: Hello, World!
// Arrow functions provide a shorter syntax.
// The `square` function returns the square of a number.
// The arrow function syntax is `() => expression`.
// The `num` parameter is enclosed in parentheses.
// The `num * num` expression is returned from the function.
// The arrow function syntax is `() => expression`.
// The `sum` function returns the sum of two numbers.
// The arrow function syntax is `(a, b) => expression`.
// The `a` and `b` parameters are enclosed in parentheses.
// The `a + b` expression is returned from the function.
