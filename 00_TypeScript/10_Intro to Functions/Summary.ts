// ===================================================
// 🔥 ADVANCED TYPESCRIPT FUNCTIONALITY TOPICS 🔥
// ===================================================

// 1️⃣ TYPE GUARDS
// - Used to narrow down the type of a variable inside a conditional block.
// Example: typeof, instanceof, and custom type guards
function isString(value: any): value is string {
    return typeof value === "string"; // Custom type guard
  }
  
  let someVar: any = "Hello, TypeScript!";
  if (isString(someVar)) {
    console.log(someVar.toUpperCase()); // ✅ This works since `someVar` is confirmed to be a string.
  }
  
  // 2️⃣ FUNCTION CONTEXT (`this`)
  // - Understanding how the `this` keyword works, especially in classes and arrow functions.
  // Example: Arrow functions do not bind `this`, but regular functions do.
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  
    printName() {
      setTimeout(function(this: Person) {
        console.log(this.name); // `this` refers to the global object (not Person instance)
      }, 1000);
    }
  
    // Using arrow function (correct binding)
    printNameWithArrow() {
      setTimeout(() => {
        console.log(this.name); // ✅ `this` refers to the Person instance
      }, 1000);
    }
  }
  
  const person = new Person("Parth");
  person.printName(); // 🛑 Error (undefined) because `this` doesn't point to the instance.
  person.printNameWithArrow(); // ✅ Output: Parth
  
  // 3️⃣ FUNCTION EXPRESSIONS
  // - Functions assigned to variables, can be anonymous or arrow functions.
  // const greet = function(name: string): string {
  //   return `Hello, ${name}!`; // Anonymous function expression
  // };
  
  // const add = (a: number, b: number): number => a + b; // Arrow function expression
  
  console.log(greet("Parth")); // ✅ Output: Hello, Parth!
  console.log(add(2, 3)); // ✅ Output: 5
  
  // 4️⃣ CURRYING
  // - Transforming a function that takes multiple arguments into a sequence of functions.
  const addCurried = (x: number) => (y: number): number => x + y;
  
  console.log(addCurried(5)(3)); // ✅ Output: 8 (Curried function calls)
  
  // 5️⃣ CALLBACK HELL / PROMISES / ASYNC-AWAIT HANDLING
  // - Using promises and async/await to avoid callback hell and manage asynchronous code.
  function fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Fetched Data"), 1000);
    });
  }
  
  fetchData().then((data) => console.log(data)); // ✅ Output: Fetched Data (after 1s)
  
  async function fetchUserData() {
    const data = await fetchData();
    console.log(data); // ✅ Output: Fetched Data (after 1s)
  }
  
  fetchUserData();
  
  // 6️⃣ FUNCTION COMPOSITION
  // - Combining multiple small functions to create a new function.
  const addTwo = (a: number): number => a + 2;
  const multiplyByThree = (a: number): number => a * 3;
  
  // Function composition
  const addAndMultiply = (a: number) => multiplyByThree(addTwo(a));
  
  console.log(addAndMultiply(4)); // ✅ Output: 18 (4 + 2 = 6, 6 * 3 = 18)
  
  // 7️⃣ DECORATORS
  // - Used to modify the behavior of classes or methods. Typically used in Angular and libraries.
  function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Method ${key} was called`);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }
  
  class Car {
    // @log
    drive() {
      console.log("Car is driving");
    }
  }
  
  const car = new Car();
  car.drive(); // ✅ Output: Method drive was called, Car is driving
  
  // 8️⃣ PARTIAL, PICK, RECORD UTILITY TYPES IN FUNCTIONS
  // - Using TypeScript's utility types to manipulate object types in functions.
  interface User {
    name: string;
    age: number;
    email: string;
  }
  
  // Partial: Makes all properties optional.
  function updateUser(user: Partial<User>) {
    return { ...user };
  }
  
  // Pick: Select specific properties from an object.
  function getUserName(user: Pick<User, "name">) {
    return user.name;
  }
  
  // Record: Creates an object type with a specific key and value type.
  function createUserMap(users: Record<string, User>) {
    return users;
  }
  
  const user1: User = { name: "Parth", age: 25, email: "parth@example.com" };
  console.log(updateUser({ name: "Parth" })); // ✅ Partial Example
  console.log(getUserName({ name: "Parth" })); // ✅ Pick Example
  console.log(createUserMap({ user1: user1 })); // ✅ Record Example
  