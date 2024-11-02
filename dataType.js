/**********
 Data Type
 **********/

/*
Data Types is an important concept. To be able to operate on variables, it is important to know something about the type.

JavaScript has 8 DataTypes
    # String
    # Number
    # Bigint
    # Boolean
    # Undefined
    # Null
    # Symbol
    # Object

*/

// Numbers:
let length = 16;
console.log(typeof length);

//With decimals:
let x1 = 34.01;
console.log(x1);

//without decimals:
let x2 = 25;
console.log(x2);

//Strings:
let color = "White";
console.log(typeof color);

//writing string Using double quotes:
let carName = "Ferri";
console.log(carName);

//writing string using single quotes:
let favCar = "Tesla";
console.log(favCar);

//Boolean:
let x = true;
console.log(typeof x);

//Object:
const person = { firstName: "Rakib", lastName: "Redoy" };
console.log(typeof person);

//Array:
const cars = ["saab", "Volvo", "BMW"];
console.log(typeof cars);

// JavaScript has dynamic types. This means that the same variable can be used to hold different data types.

let bd = "country"; // Now bd is string
bd = 50; // Now bd is number
bd = true; // Now bd is boolean

/**********
 JS BigInt
 *********/
// All JavaScript numbers are stored in a 64-bit floating-point format. JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

let xi = BigInt("123456789012345678901234567890");
console.log(typeof xi);

/**********
 Undefined
**********/
let bnd;
console.log(typeof bnd);

let emp = "";
console.log(typeof emp); // it give string datatype
