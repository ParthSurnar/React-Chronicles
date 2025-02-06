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
  