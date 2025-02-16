// ===========================
// 🔹 1️⃣ CLASS DECLARATION
// ===========================
// A class is a blueprint for creating objects.

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
  }
  
  const person1 = new Person("Alice", 25); // Creating an object
  
  console.log(person1.name, person1.age); // Output: Alice 25
 
    // another example
    class Vehicle1 {
        model: string;
        year: number;
    
        constructor(model: string, year: number) {
            this.model = model;
            this.year = year;
        }
    }

    const vehicle = new Vehicle1("BMW", 2020);
    console.log(vehicle.model, vehicle.year); // Output: BMW 2020