// Declaring a namespace (mostly used in older projects)
namespace MathOperations {
    export function add(a: number, b: number): number {
      return a + b;
    }
    export function multiply(a: number, b: number): number {
      return a * b;
    }
  }
  
  console.log(MathOperations.add(5, 10));  // ✅ Output: 15
  console.log(MathOperations.multiply(5, 10));  // ✅ Output: 50
  