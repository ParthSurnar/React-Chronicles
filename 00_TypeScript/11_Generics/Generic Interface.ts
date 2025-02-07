// Generic Interface - Used in Objects
interface KeyValuePair<K, V> {
    key: K;
    value: V;
  }
  
  const numPair: KeyValuePair<string, number> = { key: "Age", value: 22 };
  const strPair: KeyValuePair<number, string> = { key: 1, value: "One" };
  
  console.log(numPair);  // ✅ Output: { key: "Age", value: 22 }
  console.log(strPair);  // ✅ Output: { key: 1, value: "One" }
  