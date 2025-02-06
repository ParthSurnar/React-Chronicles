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
  