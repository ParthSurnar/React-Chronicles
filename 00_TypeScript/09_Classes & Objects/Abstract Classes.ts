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
  