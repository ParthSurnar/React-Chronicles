// 1️⃣ any (Disables TypeScript type checking, use with caution)
let random: any = 42;  
random = "Now I'm a string"; // ✅ No error


// 2️⃣ boolean (True or false values)
let isActive: boolean = true;


// 3️⃣ number (Represents both integers & floating points)
let age: number = 25;


// 4️⃣ string (Represents text values)
let username: string = "Nerdy Wizard 🧙‍♂️";


// 5️⃣ bigint (Larger integers, requires ES2020+)
let bigNumber: bigint = 12345678901234567890n;


// 6️⃣ symbol (Unique values, often used as object keys)
let uniqueKey: symbol = Symbol("id");


// 7️⃣ object (Anything that is not a primitive type)
let user: object = { name: "Parth", age: 22 };


// 8️⃣ array (Collection of values of the same type)
let numbers: number[] = [1, 2, 3];


// 9️⃣ tuple (Fixed-length array with defined types)
let person: [string, number] = ["Alice", 30];


// 🔟 enum (Named constants)
enum Role { User, Admin, SuperAdmin }
let myRole: Role = Role.Admin;


// 1️⃣1️⃣ literal (Exact values as types)
let direction: "up" | "down" = "up"; // Only "up" or "down" allowed


// 1️⃣2️⃣ union (Multiple possible types)
let mixed: string | number = 42;
mixed = "Hello"; // ✅ Also valid


// 1️⃣3️⃣ intersection (Combines multiple types)
type Employee = { name: string };
type Developer = { language: string };
let dev: Employee & Developer = { name: "Parth", language: "TypeScript" };


// 1️⃣4️⃣ type alias (Custom type definition)
type Point = { x: number; y: number };
let coord: Point = { x: 10, y: 20 };


// 1️⃣5️⃣ interface (Similar to type alias, but extendable)
interface Car { model: string; year: number }
let myCar: Car = { model: "BMW S1000RR", year: 2027 };


// 1️⃣6️⃣ function (Function type definition)
let greet: (name: string) => string = (name) => `Hello, ${name}!`;


// 1️⃣7️⃣ keyof (Gets keys of an object as a type)
type Person = { name: string; age: number };
let key: keyof Person = "name"; // "name" or "age" only


// 1️⃣8️⃣ typeof (Gets the type of a variable)
let someVar = "Hello";
let typeOfVar: typeof someVar; // typeOfVar is inferred as string


// 1️⃣9️⃣ mapped types (Modify all properties of a type)
type ReadOnlyPerson = { readonly [K in keyof Person]: Person[K] };


// 2️⃣0️⃣ conditional types (Types based on a condition)
type Check<T> = T extends string ? "String Type" : "Other Type";
let checkResult: Check<42>; // "Other Type"


// 1️⃣ `void`: Function that doesn't return a value
function logMessage(message: string): void {
    console.log(message);  // This function doesn't return anything
  }
  
  // 2️⃣ `undefined`: Variable that hasn’t been assigned a value
  let userAge: number | undefined;
  userAge = undefined;  // `undefined` can be assigned to a variable
  
  // 3️⃣ `null`: Represents the intentional absence of any object value
  let activeUser: string | null = null;  // `null` indicates no user is active
  
  // 4️⃣ `never`: Function that never returns (e.g., throws an error or runs forever)
  function throwError(message: string): never {
    throw new Error(message);  // The function throws an error, it never returns
  }
  
  // 5️⃣ `unknown`: Safe version of `any`. Must check type before using it
  let input: unknown;
  input = 5;
  input = "Hello";
  
  // Type guard to check type before using it safely
  if (typeof input === 'string') {
    console.log(input.toUpperCase());  // Now it's safe to use string methods
  }
  