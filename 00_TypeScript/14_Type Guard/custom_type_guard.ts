// ✅ Custom type guards define specific checks
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function moveAnimal(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();  // TypeScript now knows it's a Fish
  } else {
    animal.fly();   // TypeScript now knows it's a Bird
  }
}

const fish: Fish = { swim: () => console.log("Swimming 🐟") };
const bird: Bird = { fly: () => console.log("Flying 🦅") };

moveAnimal(fish);  // ✅ Output: Swimming 🐟
moveAnimal(bird);  // ✅ Output: Flying 🦅
