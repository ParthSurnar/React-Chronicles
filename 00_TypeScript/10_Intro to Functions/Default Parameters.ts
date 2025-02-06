// ===================================================
// 🔹 5️⃣ DEFAULT PARAMETERS
// ===================================================
// Parameters can have default values if not provided.

function multiply(a: number, b: number = 2): number {
    return a * b;
  }
  
  console.log(multiply(5)); // ✅ Output: 10 (b = 2 by default)
  console.log(multiply(5, 3)); // ✅ Output: 15
  