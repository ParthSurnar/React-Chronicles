// Example 1: Using 'as' syntax
let someValue: unknown = "I am a string";
let strLength: number = (someValue as string).length;
console.log(strLength);  // ✅ Output: 14

// Example 2: Using '<Type>' syntax (Not recommended in React)
let anotherValue: unknown = "TypeScript";
let anotherStrLength: number = (<string>anotherValue).length;
console.log(anotherStrLength);  // ✅ Output: 10
