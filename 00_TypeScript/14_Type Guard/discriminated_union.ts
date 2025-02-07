// ✅ Discriminated Unions use a common property to determine type
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };

function getArea(shape: Circle | Square) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}

console.log(getArea({ kind: "circle", radius: 10 }));  // ✅ Output: 314.16
console.log(getArea({ kind: "square", side: 5 }));     // ✅ Output: 25
