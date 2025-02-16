// ===========================
// 🔹 5️⃣ ACCESS MODIFIERS
// ===========================
// - public: Accessible anywhere
// - private: Only inside the class
// - protected: Inside class + subclasses

class Employee {
    public name: string;
    private salary: number;
    protected department: string;
  
    constructor(name: string, salary: number, department: string) {
      this.name = name;
      this.salary = salary;
      this.department = department;
    }
  
    showSalary() {
      console.log(`${this.name}'s salary is ${this.salary}`);
    }
  }
  
  const emp1 = new Employee("John", 50000, "IT");
  console.log(emp1.name); // ✅ Allowed (public)
  // console.log(emp1.salary); // ❌ ERROR (private)
  // console.log(emp1.department); // ❌ ERROR (protected)
  
  emp1.showSalary(); // ✅ Output: John's salary is 50000
  
 // another example
 
  class Individual {
      public name: string;
      private age: number
      protected address: string;

      constructor(name: string, age: number, address: string) {
          this.name = name;
          this.age = age;
          this.address = address;
      }

      showAge() {
          console.log(`${this.name}'s age is ${this.age}`);
      }
  }
 
  const ind1 = new Individual("Alice", 25, "NY");

  console.log(ind1.name); // ✅ Allowed (public)
  // console.log(ind1.age); // ❌ ERROR (private)
  // console.log(ind1.address); // ❌ ERROR (protected)

  ind1.showAge(); // ✅ Output: Alice's age is 25
  // ===========================
  // 🔹 6️⃣ ACCESS MODIFIERS IN CONSTRUCTOR PARAMETERS
  // ===========================
  // - We can use access modifiers in constructor parameters to automatically create and initialize class properties.
  // - This is a shorthand syntax to define and initialize class properties.
  // - The access modifier is required in the constructor parameter to create a class property.
  // - The property is automatically created and initialized with the value passed to the constructor.
  // - The access modifier in the constructor parameter is optional if the property is not required.