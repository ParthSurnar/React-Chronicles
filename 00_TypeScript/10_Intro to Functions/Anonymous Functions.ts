// ===================================================
// 🔹 9️⃣ ANONYMOUS FUNCTIONS
// ===================================================
// Functions without a name, often used as callbacks.

const greetUser = function (name: string): string {
    return `Hello, ${name}!`;
  };
  
  console.log(greetUser("Parth")); // ✅ Output: Hello, Parth!

// 🚀 Anonymous functions can be assigned to variables
// ----------------------------------------------------
// Anonymous functions can be assigned to variables.
const greetUser7 = function (name: string): string {
    return `Hello, ${name}!`;
  };
  
  console.log(greetUser1("John"));
  console.log(greetUser1("Doe"));

// 🚀 Anonymous functions can be passed as argument
// ----------------------------------------------------
// Anonymous functions can be passed as arguments to other functions.
function greetUser2(name: string, callback: (name: string) => string): string {
    return callback(name);
  }
  
  const greet7 = function (name: string): string {
    return `Hello, ${name}!`;
  };
  
  console.log(greetUser2("Parth", greet7)); // ✅ Output: Hello, Parth!