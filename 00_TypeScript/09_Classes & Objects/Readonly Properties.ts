// ===========================
// 🔹 6️⃣ READONLY PROPERTIES
// ===========================
// `readonly` makes a property immutable after initialization.

class Product {
    readonly productId: string;
    name: string;
  
    constructor(productId: string, name: string) {
      this.productId = productId;
      this.name = name;
    }
  }
  
  const product1 = new Product("12345", "Laptop");
  console.log(product1.productId); // Output: 12345
  // product1.productId = "67890"; // ❌ ERROR: Cannot assign to 'productId' because it is a read-only property.
  