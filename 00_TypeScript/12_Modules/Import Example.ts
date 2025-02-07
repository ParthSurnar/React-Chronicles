// Importing specific exports from another module
import { appName, greet, User } from "./export_example";

console.log(appName);  // ✅ Output: "NerdFusion"
console.log(greet("Parth"));  // ✅ Output: "Hello, Parth!"

const user = new User("Parth");
console.log(user.username);  // ✅ Output: "Parth"
