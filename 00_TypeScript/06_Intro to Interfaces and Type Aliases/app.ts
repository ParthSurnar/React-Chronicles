// ===========================
// 🔹 TypeScript Interfaces & Type Aliases
// ===========================

// 1️⃣ INTERFACES - Used to define the structure of an object

interface User {
    name: string;
    age: number;
    isAdmin: boolean;
  }
  
  const user1: User = {
    name: "John Doe",
    age: 25,
    isAdmin: false,
  };
  
  // ✅ Interfaces enforce structure but don't generate JS code
  
  // ---------------------------
  
  // 2️⃣ TYPE ALIAS - Similar to interfaces but can also be used for primitives & unions
  
  type ID = string | number; // Type alias for multiple possible types
  
  let userID: ID = 123; // ✅ Valid
  userID = "ABC123"; // ✅ Valid
  
  // ---------------------------
  
  // 3️⃣ DIFFERENCE BETWEEN INTERFACES & TYPE ALIAS
  // Interfaces - ONLY for object structures
  // Type Aliases - Can be used for objects, primitives, unions, intersections
  
  // ✅ Example: Using a type alias for a function signature
  type MathOperation = (x: number, y: number) => number;
  
  const add: MathOperation = (a, b) => a + b;
  const multiply: MathOperation = (a, b) => a * b;
  
  // ---------------------------
  
  // 4️⃣ EXTENDING INTERFACES - You can inherit properties from another interface
  
  interface Person {
    name: string;
    age: number;
  }
  
  interface Employee extends Person {
    role: string;
  }
  
  const employee1: Employee = {
    name: "Alice",
    age: 30,
    role: "Software Engineer",
  };
  
  // ---------------------------
  
  // 5️⃣ MERGING INTERFACES - Interfaces with the same name are merged
  
  interface Animal {
    name: string;
  }
  
  interface Animal {
    legs: number;
  }
  
  const dog: Animal = {
    name: "Buddy",
    legs: 4,
  }; // ✅ Both interfaces are merged
  
  // ---------------------------
  
  // 6️⃣ USING TYPE ALIASES WITH OBJECTS & UNIONS
  
  type Address = {
    street: string;
    city: string;
  };
  
  type UserWithAddress = User & { address: Address }; // Intersection of types
  
  const user2: UserWithAddress = {
    name: "Emma",
    age: 22,
    isAdmin: true,
    address: {
      street: "123 Main St",
      city: "New York",
    },
  };
  // ---------------------------
  
  // 7️⃣ INTERFACES VS TYPE ALIAS - WHEN TO USE WHAT?
  // - Use **interface** when defining object structures that might be extended or merged.
  // - Use **type alias** when dealing with unions, intersections, or primitives.