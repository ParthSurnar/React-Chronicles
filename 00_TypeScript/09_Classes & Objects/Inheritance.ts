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
  

  // In the above example, the `Bike` class extends the `Vehicle` class.
  // The `Bike` class inherits the `brand` property and `start` method from the `Vehicle` class.
  // The `super(brand)` method calls the parent class constructor
  // The `Bike` class has its own `type` property.
  // The `bike1` object is an instance of the `Bike` class.
  // The `start` method is called on the `bike1` object.
  // Output: Yamaha is starting...
  