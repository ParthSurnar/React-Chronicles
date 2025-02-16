// ===========================
// 🔹 4️⃣ CLASS METHODS
// ===========================
// Methods define behavior inside a class.

class User {
    username: string;
  
    constructor(username: string) {
      this.username = username;
    }
  
    greet() {
      console.log(`Hello, ${this.username}!`);
    }
  }
  
  const user1 = new User("Parth");
  user1.greet(); // Output: Hello, Parth!
  
  // another example
  class AnimalClass {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound`);
    }
  }

  const dogInstance = new AnimalClass("Dog");
  dogInstance.makeSound(); // Output: Dog makes a sound
  // ===========================
  // 🔹 3️⃣ CLASS INHERITANCE
  // ===========================
  // Inheritance allows a class to inherit properties and methods from another class.

  class PersonClass {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }

  class Student extends PersonClass {
    rollNumber: number;
  
    constructor(name: string, age: number, rollNumber: number) {
      super(name, age);
      this.rollNumber = rollNumber;
    }
  
    study() {
      console.log(`${this.name} is studying`);
    }
  }

  const student1 = new Student("Alice", 20, 1234);
  student1.greet(); // Output: Hello, Alice!
  student1.study(); // Output: Alice is studying
  