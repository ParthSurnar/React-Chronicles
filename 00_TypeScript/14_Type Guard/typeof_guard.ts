// ✅ `typeof` is used to check primitive types
function processInput(input: string | number) {
    if (typeof input === "string") {
      console.log(`Processing a string: ${input.toUpperCase()}`);
    } else {
      console.log(`Processing a number: ${input * 2}`);
    }
  }
  
  processInput("hello");  // ✅ Output: Processing a string: HELLO
  processInput(10);       // ✅ Output: Processing a number: 20
  