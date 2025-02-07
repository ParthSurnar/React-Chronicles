// Using 'unknown' and forcing assertion
let someNumber: unknown = "100";
let convertedNumber: number = someNumber as number;  // ❌ Incorrect usage
console.log(convertedNumber);  // ❌ Runtime error

// ✅ Correct approach: First assert to 'string', then convert
let properNumber: number = Number(someNumber as string);
console.log(properNumber);  // ✅ Output: 100
