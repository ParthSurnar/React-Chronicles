// Generic Function - Works with any data type
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  console.log(getFirstElement<number>([10, 20, 30]));  // ✅ Output: 10
  console.log(getFirstElement<string>(["Hello", "World"]));  // ✅ Output: "Hello"
  
  // Function with multiple generic types
  function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  const mergedObj = merge({ name: "Parth" }, { age: 22 });
  console.log(mergedObj);  // ✅ Output: { name: "Parth", age: 22 }
  