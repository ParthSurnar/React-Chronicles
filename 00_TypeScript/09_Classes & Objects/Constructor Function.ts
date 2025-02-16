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
  

  // another example
  class VehicleModel {
    model: string;
  
    constructor(model: string) {
      this.model = model;
    }
  }

  const vehicle1 = new VehicleModel("BMW");
  console.log(vehicle1.model); // Output: BMW
  // ===========================
  // The `constructor` method is a special method that is called when an object is created using the `new` keyword.
  // It is used to initialize the object's properties.
  // The `constructor` method can take parameters that are used to initialize the object's properties.
  // The `constructor` method is optional. If not defined, a default constructor is used.

  // ===========================

  // 🔹 4️⃣ DEFAULT CONSTRUCTOR
  // ===========================
  // If a class does not have a constructor, a default constructor is used.
  // The default constructor initializes the object with no properties.
 
  class EmployeeInfo {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }

  const employee1 = new EmployeeInfo("John Doe", 30, "123 Main St");
  console.log(employee1.name, employee1.age); // Output: John Doe 30
  