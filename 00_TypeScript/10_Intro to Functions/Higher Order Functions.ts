// ===================================================
// 🔹 1️⃣1️⃣ HIGHER-ORDER FUNCTIONS
// ===================================================
// Functions that take other functions as arguments or return functions.

function operateOnNumbers(
    a: number,
    b: number,
    operation: (x: number, y: number) => number
  ): number {
    return operation(a, b);
  }
  
  const addition = (x: number, y: number): number => x + y;
  console.log(operateOnNumbers(5, 10, addition)); // ✅ Output: 15

// 🚀 Higher-order functions can return functions
// ----------------------------------------------------
// Functions can return other functions.
function createGreeter(greeting: string) {
    return (name: string) => `${greeting}, ${name}!`;
  }
  
  const sayHello = createGreeter("Hello");
  console.log(sayHello("John")); // ✅ Output: Hello, John!