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
  