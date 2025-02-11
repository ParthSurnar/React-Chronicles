// ===========================
// 🔹 9️⃣ INHERITANCE (EXTENDING CLASSES)
// ===========================
// A child class can inherit properties and methods from a parent class using `extends`.

class Vehicle {
    brand: string;
  
    constructor(brand: string) {
      this.brand = brand;
    }
  
    start() {
      console.log(`${this.brand} is starting...`);
    }
  }
  
  class Bike extends Vehicle {
    type: string;
  
    constructor(brand: string, type: string) {
      super(brand); // Calls parent constructor
      this.type = type;
    }
  }
  
  const bike1 = new Bike("Yamaha","Sport");
  bike1.start(); // ✅ Output: Yamaha is starting...
  