// ===========================
// 🔹 TypeScript Type Aliases - Fundamentals
// ===========================

// 1️⃣ BASIC TYPE ALIAS
// A type alias is used to create a custom name for a type.

type Username = string;
type Age = number;

const username1: Username = "Parth";
const userAge: Age = 22;

// ---------------------------

// 2️⃣ TYPE ALIAS FOR OBJECTS
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const user2: User = {
  name: "Alice",
  age: 25,
  isAdmin: false,
};

// ---------------------------

// 3️⃣ TYPE ALIAS FOR UNION TYPES
let userID: string | number = 101; // ✅ Valid
userID = "ABC123"; // ✅ Valid

// ---------------------------

// 4️⃣ TYPE ALIAS FOR FUNCTION SIGNATURES
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

console.log(add(5, 10)); // Output: 15
console.log(multiply(5, 10)); // Output: 50

// ---------------------------

// 5️⃣ TYPE ALIAS WITH INTERSECTIONS
type AddressLocation = {
  street: string;
  city: string;
};

type UserWithLocation = User & AddressLocation; // Combines two types

const user3: UserWithLocation = {
  name: "Emma",
  age: 28,
  isAdmin: true,
  street: "456 Maple St",
  city: "New York",
};

// ---------------------------

// 6️⃣ TYPE ALIAS WITH ARRAYS
type StringArray = string[];
type NumberArray = Array<number>;

const names: StringArray = ["Alice", "Bob", "Charlie"];
const scores: NumberArray = [95, 88, 76];

// ---------------------------

// 7️⃣ OPTIONAL & READONLY PROPERTIES IN TYPE ALIAS
type ProductItem = {
  readonly id: number; // Cannot be changed
  name: string;
  price?: number; // Optional property
};

const productItem1: ProductItem = { id: 1, name: "Laptop" };


// ===========================
// 🔹 SUMMARY
// ===========================
// ✅ Type aliases (`type`) create custom names for **primitive, object, union, function, and array types**.
// ✅ `&` is used for **type intersections (combining types)**.
// ✅ **Optional (`?`) & Readonly (`readonly`)** properties can be used in type aliases.
// ✅ Type aliases **do not support inheritance**, unlike interfaces.



// ===========================
// 🔹 Intersection Types in TypeScript
// ===========================

// 1️⃣ WHAT IS AN INTERSECTION TYPE?
// An intersection type combines multiple types into one. It ensures that a value is of all the combined types.

type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

// Combining (intersection) the two types
type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "John Doe",
  age: 30,
  street: "123 Main St",
  city: "New York",
};

// ✅ The personWithAddress object is of both `Person` and `Address` types

// ---------------------------

// 2️⃣ COMBINATION OF MULTIPLE TYPES
// Intersection types can combine more than two types. This is useful for merging multiple interfaces.

type ContactInfo = {
  email: string;
  phone: string;
};

type Employee = Person & Address & ContactInfo;

const employee1: Employee = {
  name: "Alice",
  age: 25,
  street: "456 Oak St",
  city: "Los Angeles",
  email: "alice@company.com",
  phone: "123-456-7890",
};

// ✅ employee1 is now a combination of `Person`, `Address`, and `ContactInfo`

// ---------------------------

// 3️⃣ COMBINING PRIMITIVES WITH OBJECTS
// Intersection types can also combine primitive types with objects or other types.

type ID = string | number; // Union type for ID

type UserWithID = Person & { id: ID };

const user1: UserWithID = {
  name: "John",
  age: 40,
  id: "USER123", // This could also be a number
};

// ✅ user1 has both `Person` properties and an `id` property

// ---------------------------

// 4️⃣ INTERSECTIONS WITH OPTIONAL PROPERTIES
// You can combine optional properties with intersection types.

type Product = {
  name: string;
  price?: number; // Optional property
};

type ProductDetails = Product & { description: string };

const product1: ProductDetails = {
  name: "Laptop",
  description: "A powerful laptop.",
};

// ✅ `product1` has properties from both `Product` and `ProductDetails`

// --------------------------------

// 5️⃣ USING INTERSECTION TYPES WITH FUNCTION TYPES
// You can create complex function signatures using intersection types.

type AddOperation = (x: number, y: number) => number;
type LogOperation = (message: string) => void;

type Operation = AddOperation & LogOperation; // Combining both function types

const addOperation: AddOperation = (x, y) => x + y;
const logOperation: LogOperation = (message) => console.log(message);

const result = addOperation(3, 4);
logOperation(`Result: ${result}`); // Output: Result: 7
// ✅ `operation` function has properties of both `AddOperation` and `LogOperation`

// ---------------------------

// 6️⃣ WHY USE INTERSECTION TYPES?
// - **Combines multiple types into one** and ensures the object matches all types.
// - **Useful for composition** of objects or creating complex types.
// - **Flexible** and allows for the creation of highly reusable types.

