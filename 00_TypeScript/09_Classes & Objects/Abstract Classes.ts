// ===========================
// 🔟 ABSTRACT CLASSES
// ===========================
// - Abstract classes define a structure but cannot be instantiated directly.

abstract class Shape {
    abstract getArea(): number; // Must be implemented by child classes
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.getArea()); // ✅ Output: 78.54

// Abstract classes are used to define a structure for child classes. They cannot be instantiated directly.
// The `Shape` class defines a method `getArea()` which must be implemented by child classes.
// The `Circle` class extends `Shape` and provides an implementation for `getArea()` method.
// The `circle` object is created using the `Circle` class and the `getArea()` method is called.

// Abstract classes can also have abstract properties and methods. These must be implemented by child classes.
// Abstract properties and methods are defined using the `abstract` keyword.
// The `Shape` class can be modified to include an abstract property `name`:
// abstract class Shape {
//     abstract name: string;
//     abstract getArea(): number;
//   }

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 5);
console.log(rectangle.getArea()); // ✅ Output: 50

// another example 
abstract class Person1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log(this.name);
    }

    abstract find(name: string): Person;
}