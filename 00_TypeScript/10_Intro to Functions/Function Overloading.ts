// ===================================================
// 🔹 7️⃣ FUNCTION OVERLOADING
// ===================================================
// A function can have multiple signatures but one implementation.

function getData(id: number): string;
function getData(name: string): string;
function getData(value: number | string): string {
  return `Fetching data for: ${value}`;
}

console.log(getData(101)); // ✅ Output: Fetching data for: 101
console.log(getData("Parth")); // ✅ Output: Fetching data for: Parth
