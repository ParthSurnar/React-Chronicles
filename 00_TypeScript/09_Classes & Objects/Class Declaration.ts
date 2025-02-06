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
  