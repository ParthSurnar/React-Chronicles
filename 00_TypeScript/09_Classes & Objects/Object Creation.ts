// ===========================
// 🔹 2️⃣ OBJECT CREATION
// ===========================
// Objects are instances of a class.

class Car {
    brand: string = "Toyota";
  }
  
  const car1 = new Car(); // Object of class Car
  console.log(car1.brand); // Output: Toyota

  // another way to create an object
  const car2 = new Car();
  car2.brand = "BMW";
  console.log(car2.brand); // Output: BMW
  