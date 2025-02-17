// ===========================
// 🔹 8️⃣ STATIC PROPERTIES & METHODS
// ===========================
// `static` means the property or method belongs to the class itself, not to instances.

class MathUtils {
    static PI: number = 3.14159;
  
    static square(num: number) {
      return num * num;
    }
  }
  
  console.log(MathUtils.PI); // ✅ Output: 3.14159
  console.log(MathUtils.square(4)); // ✅ Output: 16
  

// In the above example, the `PI` property and `square` method are declared as `static`.
// The `PI` property is accessed using the class name `MathUtils.PI`.

// another example
class Logger {
    static log(message: string) {
      console.log(message);
    }
  }
  
  Logger.log("Hello, World!"); // ✅ Output: Hello, World!

// In the above example, the `log` method is declared as `static`.
// The `log` method is called using the class name `Logger.log()`.
// The `log` method logs the message to the console.
