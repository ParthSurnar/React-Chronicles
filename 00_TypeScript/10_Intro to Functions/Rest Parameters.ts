// ===================================================
// 🔹 6️⃣ REST PARAMETERS (...args)
// ===================================================
// Use rest parameters to accept multiple arguments as an array.

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // ✅ Output: 15
  