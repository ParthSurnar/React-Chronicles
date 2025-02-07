// Generic Class - Stores any type of data
class GenericStorage<T> {
    private items: T[] = [];
  
    addItem(item: T) {
      this.items.push(item);
    }
  
    removeItem(item: T) {
      this.items = this.items.filter(i => i !== item);
    }
  
    getAllItems(): T[] {
      return this.items;
    }
  }
  
  const textStorage = new GenericStorage<string>();
  textStorage.addItem("Hello");
  textStorage.addItem("World");
  console.log(textStorage.getAllItems());  // ✅ Output: ["Hello", "World"]
  
  const numberStorage = new GenericStorage<number>();
  numberStorage.addItem(100);
  numberStorage.addItem(200);
  console.log(numberStorage.getAllItems());  // ✅ Output: [100, 200]
  