// ===================================================
// 🔹 1️⃣2️⃣ GENERIC FUNCTIONS
// ===================================================
// Generic functions work with any type.

function identity<T>(value: T): T {
    return value;
  }
  
  console.log(identity<number>(10)); // ✅ Output: 10
  console.log(identity<string>("Hello")); // ✅ Output: Hello

// 🚀 Generic functions can have constraint
// 
// Constraints allow you to limit the types that can be passed to a generic function.
// In this example, the function only accepts types that have a length property.
function getLength<T extends { length: number }>(value: T): number {
    return value.length;
  }
  
  console.log(getLength("Hello")); // ✅ Output: 5
  console.log(getLength([1, 2, 3])); // ✅ Output: 3
  console.log(getLength({ length: 10 })); // ✅ Output: 10