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
  