// ===================================================
// 🔹 1️⃣ INTRODUCTION TO FUNCTIONS
// ===================================================
// A function is a reusable block of code that performs a task.

function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Parth")); // ✅ Output: Hello, Parth!
  

// 🚀 Functions can take parameters
// ----------------------------------------------------
// Parameters are variables that are defined in the function signature.
// They are used to pass values to the function when it is called.
// In the above example, `name` is a parameter of the `greet` function.
// The `greet` function takes a `name` parameter and returns a greeting message.

// multiple examples
function greetUser6(name: string): string {
    return `Hello, ${name}!`;
  }
  
  console.log(greetUser6("Parth")); // ✅ Output: Hello, Parth!
  console.log(greetUser6("John")); // ✅ Output: Hello, John!
  console.log(greetUser6("Doe")); // ✅ Output: Hello, Doe!

// 🚀 Functions can return value
// ----------------------------------------------------

// Functions can return a value using the `return` keyword.
// The return type of the function is specified after the parameter list.
// In the above example, the `greet` function returns a string value.
// The return value is specified after the `:` symbol in the function signature.