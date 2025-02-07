// ✅ `instanceof` is used to check if an object belongs to a class
class Dog {
    bark() {
      console.log("Woof! 🐶");
    }
  }
  
  class Cat {
    meow() {
      console.log("Meow! 🐱");
    }
  }
  
  function animalSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
      animal.bark();
    } else {
      animal.meow();
    }
  }
  
  const dog = new Dog();
  const cat = new Cat();
  
  animalSound(dog);  // ✅ Output: Woof! 🐶
  animalSound(cat);  // ✅ Output: Meow! 🐱
  