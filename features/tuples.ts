const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};

//TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.
var user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable

//You can declare an array of tuple also.
var employee: [number, string][];
employee = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];

// Accessing Tuple
var vijay: [number, string] = [1, "Steve"];
vijay[0]; // returns 1
vijay[1]; // returns "Steve"
