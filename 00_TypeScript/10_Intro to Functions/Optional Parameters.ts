// ===================================================
// 🔹 4️⃣ OPTIONAL PARAMETERS
// ===================================================
// Use `?` to define optional parameters in a function.

function welcome(name: string, age?: number): string {
    if (age) {
      return `Welcome ${name}, Age: ${age}`;
    }
    return `Welcome ${name}`;
  }
  
  console.log(welcome("Parth")); // ✅ Output: Welcome Parth
  console.log(welcome("Parth", 22)); // ✅ Output: Welcome Parth, Age: 22

// Optional parameters allow you to skip passing an argument to a function.
// In the above example, the `age` parameter is optional.
// The `welcome` function returns a welcome message with or without the age.
// When the age is not provided, the function returns a message without the age.
// When the age is provided, the function returns a message with the age.
// The `?` symbol is used to define optional parameters in a function.
// The `age` parameter is optional in the `welcome` function.
// The `?` symbol is placed after the parameter name to make it optional.
// The `age` parameter is optional in the `welcome` function.

// 🚀 Optional parameters with other parameters

function greet1(name: string, message?: string): string {
    if (message) {
      return `${message}, ${name}!`;
    }
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Parth")); // ✅ Output: Hello, Parth!
  console.log(greet1("Parth", "Welcome")); // ✅ Output: Welcome, Parth!