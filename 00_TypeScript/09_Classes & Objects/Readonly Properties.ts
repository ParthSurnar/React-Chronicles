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
  

// In the above example, the `productId` property is marked as `readonly`.
// The `productId` property is initialized in the constructor.

// another way to declare readonly properties
class UserWithReadonly {
    constructor(readonly userId: string, public name: string) {}
  }
  
  const userReadonly = new UserWithReadonly("U123", "John");

// In the above example, the `userId` property is marked as `readonly` using the `readonly` keyword in the constructor parameter.
// The `userId` property is initialized in the constructor.