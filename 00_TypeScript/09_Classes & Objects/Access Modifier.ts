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
  