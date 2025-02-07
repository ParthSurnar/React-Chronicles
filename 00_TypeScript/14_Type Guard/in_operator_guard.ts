// ✅ `in` operator checks if a property exists in an object
type Car = { speed: number };
type Boat = { sail: boolean };

function checkVehicle(vehicle: Car | Boat) {
  if ("speed" in vehicle) {
    console.log(`It's a car with speed ${vehicle.speed}`);
  } else {
    console.log(`It's a boat with sail: ${vehicle.sail}`);
  }
}

checkVehicle({ speed: 120 });  // ✅ Output: It's a car with speed 120
checkVehicle({ sail: true });  // ✅ Output: It's a boat with sail: true
