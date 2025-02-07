/*
🎯 **TypeScript Type Assertion - Summary**
--------------------------------------------
✅ **What is it?** 
   TypeScript feature to manually specify a type when TS can't infer it correctly.

✅ **Two Ways to Use:**
   1️⃣ `value as Type`  (Recommended)
   2️⃣ `<Type>value`  (Not recommended in JSX)

✅ **When to Use:**
   - When working with `unknown` or `any` types
   - When handling **DOM elements**
   - When TypeScript's inference **isn't sufficient**

✅ **Common Mistakes to Avoid:**
   - ❌ Forcing incorrect assertions (`unknown as number`)
   - ❌ Using double assertion (`unknown as unknown as Type`)
   - ❌ Assuming assertion converts types (It doesn't!)

🚀 **Key Takeaway:**  
✔️ Type Assertion tells TypeScript *how* to treat a value, but it doesn't change the actual value itself.
*/
