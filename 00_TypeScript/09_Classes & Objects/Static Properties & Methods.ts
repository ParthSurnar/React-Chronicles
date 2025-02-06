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
  