// ===========================
// 🔹 Extending Interfaces in TypeScript
// ===========================

// 1️⃣ BASIC INTERFACE EXTENSION
// A child interface inherits properties from a parent interface.

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    role: string;
}

const emp1: Employee = {
    name: "John",
    age: 30,
    role: "Software Engineer",
};

// ---------------------------

// 2️⃣ MULTIPLE INTERFACE EXTENSION
// An interface can extend multiple interfaces.

interface Address {
    city: string;
    country: string;
}

interface FullEmployee extends Person, Address {
    department: string;
}

const emp2: FullEmployee = {
    name: "Alice",
    age: 28,
    street: "456 Elm St",
    city: "New York",
    country: "USA",
    department: "IT",
};

// ---------------------------

// 3️⃣ ADDING OPTIONAL PROPERTIES
// Use `?` to make properties optional in extended interfaces.

interface User {
    username: string;
    password: string | number;
}

interface Admin extends User {
    isSuperAdmin?: boolean; // Optional property
}

const admin1: Admin = {
    id: 1,
    createdAt: new Date(),
    username: "admin123",
    password: "securePass",
}; // ✅ Valid, as `isSuperAdmin` is optional

// ---------------------------

// 4️⃣ OVERRIDING PROPERTY TYPES (NOT ALLOWED DIRECTLY)
// You can't change the type of inherited properties directly in an extended interface.
// Instead, use intersection types (`&`) for modifications.

type ModUser = User & { password: number }; // Overrides `password` to `number`

const modUser1: ModUser = {
    id: 2,
    createdAt: new Date(),
    username: "modUser",
    password: 123456, // ✅ Now password is a number
};

// ===========================
// 🔹 SUMMARY
// ===========================
// ✅ `extends` is used to inherit properties from another interface.
// ✅ Interfaces can extend **one or multiple** interfaces.
// ✅ Optional properties (`?`) can be added in extended interfaces.
// ✅ Direct property type changes aren't allowed; use `&` instead.


// ===========================
// 🔹 More Examples of Extending Interfaces
// ===========================

// 1️⃣ EXTENDING INTERFACE WITH METHOD
interface Animal {
    name: string;
    makeSound(): void;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    makeSound() {
        console.log("Woof! Woof! 🐶");
    },
};

myDog.makeSound(); // Output: Woof! Woof!

// ---------------------------

// 2️⃣ INTERFACE EXTENSION WITH READONLY PROPERTY
interface BaseEntity {
    readonly id: number; // Cannot be changed after initialization
    createdAt: Date;
}

interface User extends BaseEntity {
    username: string;
}

const user1: User = {
    id: 101,
    createdAt: new Date(),
    username: "nerdy_wizard",
    password: "defaultPassword",
};

// user1.id = 102; ❌ ERROR: Cannot assign to 'id' because it is a read-only property.

// ---------------------------

// 3️⃣ NESTED INTERFACE EXTENSION
interface Address {
    street: string;
    city: string;
}

interface Customer {
    name: string;
    address: Address; // Using another interface inside an interface
}

const customer1: Customer = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
};

// ---------------------------

// 4️⃣ EXTENDING MULTIPLE INTERFACES WITH DIFFERENT DATA TYPES
interface HasEmail {
    email: string;
}

interface HasPhone {
    phone: number;
}

interface ContactInfo extends HasEmail, HasPhone {
    address: string;
}

const contact: ContactInfo = {
    email: "test@example.com",
    phone: 9876543210,
    address: "456 Maple St",
};

// ---------------------------

// 5️⃣ INTERFACE EXTENDING A GENERIC INTERFACE
interface ApiResponse<T> {
    data: T;
    success: boolean;
}

interface UserResponse extends ApiResponse<User> { }

const response: UserResponse = {
    data: {
        id: 1,
        createdAt: new Date(),
        username: "typescript_master",
        password: "securePass123",
    },
    success: true,
};

// ===========================
// 🔹 SUMMARY
// ===========================
// ✅ Interfaces can extend **one or multiple** interfaces.
// ✅ Methods can be inherited in extended interfaces.
// ✅ Readonly properties (`readonly`) cannot be changed after initialization.
// ✅ Nested interfaces allow for **structured** data.
// ✅ Generics (`T`) can be used to make interfaces **flexible**.

