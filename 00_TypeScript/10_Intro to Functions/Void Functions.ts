// ===================================================
// 🔹 3️⃣ VOID FUNCTIONS (NO RETURN VALUE)
// ===================================================
// `void` is used when a function does not return anything.

function logMessage(message: string): void {
    console.log(message);
  }
  
  logMessage("This function returns nothing!"); // ✅ Output: This function returns nothing!
  

// another example
function greetUser1(name: string): void {
    console.log(`Hello, ${name}!`);
  }

  greetUser1("Parth"); // ✅ Output: Hello, Parth!
  greetUser1("John"); // ✅ Output: Hello, John!
  greetUser1("Doe"); // ✅ Output: Hello, Doe!