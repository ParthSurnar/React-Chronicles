// ===================================================
// 🔹 🔟 CALLBACK FUNCTIONS
// ===================================================
// Functions passed as arguments to another function.

function fetchData1(callback: (data: string) => void) {
    setTimeout(() => {
      callback("Fetched Data");
    }, 1000);
  }
  
  fetchData1((data) => console.log(data)); // ✅ Output: Fetched Data (after 1s)
  

  // another example

  function fetchData2(callback: (data: string) => void) {
    setTimeout(() => {
      callback("Fetched Data");
    }, 1000);
  }

  function displayData(data: string) {
    console.log(data);
  }

  fetchData2(displayData); // ✅ Output: Fetched Data (after 1s)

// 🚀 Callback functions are used in asynchronous programming to handle events or data once the operation is complete
//  - They are commonly used in browser APIs like `setTimeout`, `fetch`, `addEventListener`, etc.
//  - Callback functions are also used in Node.js for file operations, network requests, etc.
//  - Callbacks can be synchronous or asynchronous, depending on the operation.
//  - Callback Hell: Nested callbacks can make the code hard to read and maintain. This is known as callback hell.
//  - To avoid callback hell, use Promises, async/await, or libraries like RxJS for handling asynchronous operations.
