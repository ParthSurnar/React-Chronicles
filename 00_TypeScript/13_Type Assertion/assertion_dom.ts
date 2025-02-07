// Accessing an HTML element and asserting its type
const inputElement = document.getElementById("username") as HTMLInputElement;
inputElement.value = "Parth";  // ✅ TypeScript knows it's an input field
