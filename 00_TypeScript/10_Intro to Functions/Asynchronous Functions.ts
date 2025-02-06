// ===================================================
// 🔹 1️⃣3️⃣ ASYNCHRONOUS FUNCTIONS (ASYNC/AWAIT)
// ===================================================
// Functions that work with promises.

async function fetchUser(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("User Data Loaded"), 1000);
    });
  }
  
  fetchUser().then((data) => console.log(data)); // ✅ Output: User Data Loaded (after 1s)
  