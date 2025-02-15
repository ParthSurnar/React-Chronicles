// ===================================================
// 🔹 6️⃣ REST PARAMETERS (...args)
// ===================================================
// Use rest parameters to accept multiple arguments as an array.

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // ✅ Output: 15

// Rest parameters allow you to accept multiple arguments as an array.
// Rest parameters are denoted by `...` followed by the parameter name.
// In the above example, `numbers` is a rest parameter that accepts multiple numbers.
// The `sum` function returns the sum of all the numbers passed as arguments.

// 🚀 Rest parameters with other parameters


function multiply1(multiplier: number, ...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc * num, 1) * multiplier;
  }
  
  console.log(multiply1(2, 1, 2, 3, 4, 5)); // ✅ Output: 240