// ===================================================
// 🔹 2️⃣ FUNCTION RETURN TYPES
// ===================================================
// We explicitly define what type a function should return.

function add(a: number, b: number): number {
    return a + b;
  }
  
  console.log(add(5, 10)); // ✅ Output: 15
  

// 🚀 Functions can return any type
// ----------------------------------------------------
// Functions can return any type, not just primitive types.
// In this example, the function returns an object.
function createUser(name: string, age: number): object {
    return { name, age };
  }
  
  console.log(createUser("John", 30)); // ✅ Output: { name: 'John', age: 30 }

// 🚀 Functions can return void

// Functions can return `void` when they do not return anything.
// In this example, the function does not return anything.
function logMessage1(message: string): void {
    console.log(message);
  }
  
  logMessage("This function returns nothing!"); // ✅ Output: This function returns nothing!