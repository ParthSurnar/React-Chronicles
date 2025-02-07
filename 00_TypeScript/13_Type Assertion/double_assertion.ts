// Double assertion allows any type to be forced into another type (⚠️ Risky)
let mysteryValue: unknown = "Hello World";
let unsafeAssertion: number = mysteryValue as unknown as number;  
console.log(unsafeAssertion);  // ❌ No error, but incorrect logic
