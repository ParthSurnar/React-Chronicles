// ===================================================
// 🔹 5️⃣ DEFAULT PARAMETERS
// ===================================================
// Parameters can have default values if not provided.

function multiply(a: number, b: number = 2): number {
    return a * b;
  }
  
  console.log(multiply(5)); // ✅ Output: 10 (b = 2 by default)
  console.log(multiply(5, 3)); // ✅ Output: 15

// Default parameters allow you to assign a default value to a parameter.
// If the argument is not provided, the default value is used instead.
// In the above example, the `b` parameter has a default value of `2`.
// When the `b` argument is not provided, the default value `2` is used.
// When the `b` argument is provided, the provided value is used instead.
// The default value is assigned to the parameter using the `=` operator.


// 🚀 Default parameters with other parameter
// 
function greet2(name: string, message: string = "Hello"): string {
    return `${message}, ${name}!`;
  }
  
  console.log(greet("Parth")); // ✅ Output: Hello, Parth!
  console.log(greet2("Parth", "Welcome")); // ✅ Output: Welcome, Parth!