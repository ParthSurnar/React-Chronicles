// ===========================
// 🔹 3️⃣ CONSTRUCTOR FUNCTION
// ===========================
// The constructor is used to initialize properties when an object is created.

class Animal {
    type: string;
  
    constructor(type: string) {
      this.type = type;
    }
  }
  
  const dog = new Animal("Dog");
  console.log(dog.type); // Output: Dog
  