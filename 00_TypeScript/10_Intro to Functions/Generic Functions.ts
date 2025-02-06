// ===================================================
// 🔹 1️⃣2️⃣ GENERIC FUNCTIONS
// ===================================================
// Generic functions work with any type.

function identity<T>(value: T): T {
    return value;
  }
  
  console.log(identity<number>(10)); // ✅ Output: 10
  console.log(identity<string>("Hello")); // ✅ Output: Hello
  