// ===================================================
// 🔹 🔟 CALLBACK FUNCTIONS
// ===================================================
// Functions passed as arguments to another function.

function fetchData(callback: (data: string) => void) {
    setTimeout(() => {
      callback("Fetched Data");
    }, 1000);
  }
  
  fetchData((data) => console.log(data)); // ✅ Output: Fetched Data (after 1s)
  