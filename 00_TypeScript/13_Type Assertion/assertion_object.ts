// Example: Converting a generic object into a specific type
type User = { name: string; age: number };
let user = {} as User;

user.name = "Parth";
user.age = 22;

console.log(user);  // ✅ Output: { name: 'Parth', age: 22 }
