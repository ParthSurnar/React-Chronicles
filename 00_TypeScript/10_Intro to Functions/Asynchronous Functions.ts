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
  

  // another example

  async function fetchUserDetails(): Promise<string> {
    const user = await fetchUser();
    return `User Details: ${user}`;
  }

  fetchUserDetails().then((data) => console.log(data)); // ✅ Output: User Details: User Data Loaded (after 1s)

// 🚀 Async functions are used to perform asynchronous operations in JavaScript
// - The `async` keyword is used to define an asynchronous function that returns a promise
// - The `await` keyword is used to wait for a promise to resolve
// - Async functions can be used with promises, callbacks, and other async functions
// - Async functions make asynchronous code easier to read and write
// - Async functions can be used to fetch data, handle events, and perform other asynchronous tasks
// - Async functions are supported in all modern browsers and Node.js
// - Async functions can be used with try/catch blocks to handle errors
// - Async functions can be used with Promise.all to run multiple async operations in parallel