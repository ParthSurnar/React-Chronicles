// ===========================
// 🔹 7️⃣ GETTERS AND SETTERS
// ===========================
// Getters allow you to access private properties.
// Setters allow controlled modification of private properties.

class BankAccount {
    private balance: number = 0;
  
    get getBalance() {
      return this.balance;
    }
  
    set deposit(amount: number) {
      if (amount > 0) {
        this.balance += amount;
      } else {
        console.log("Invalid deposit amount.");
      }
    }
  }
  
  const account = new BankAccount();
  account.deposit = 1000; // ✅ Using setter
  console.log(account.getBalance); // ✅ Using getter (Output: 1000)
  

// anotehr example

class StudentWithAge {
    private _age: number = 0;
  
    get age() {
      return this._age;
    }
  
    set age(value: number) {
      if (value > 0) {
        this._age = value;
      } else {
        console.log("Invalid age.");
      }
    }
  }
  
  const student = new StudentWithAge();
  student.age = 20; // ✅ Using setter
  console.log(student.age); // ✅ Using getter (Output: 20)