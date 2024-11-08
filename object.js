/*

// JS objects

In JS, objects are king. Objects are containers for properties and methods. Properties are named Values. Methods are Function stored as properties. properties can be primitive values, funcitons or even other objects.

Objects are variables too. But objects can contain many values.

In JavaScript, almost "everything" is an object.

    Objects are objects
    Maths are objects
    Functions are objects
    Dates are objects
    Arrays are objects
    Maps are objects
    Sets are objects
All JavaScript values, except primitives, are objects.

// JavaScript Object Literal

An object literal is a list of name:value pairs inside curly braces {}.

*/

// Example :

const car = {
  name: "BMW",
  model: "t500",
  color: "red",
};

console.log(car);

/*

// Accessing Object Properties

 We can access object properties in two ways.
 1. objectName.propertyName;
 2. objectName["propertyName"];

 */

console.log(car.name); //objectName.propertyName
console.log(car["model"]); // objectName["propertyName"]

/*

Objects are Muteable

In JS, objects are mutable. They are addressed by reference not by value.

*/

const x = car;
// the object x is not a copy of car. the object x is person. the object x and the object car share the same memory address. any changes to x will also change person.

console.log(car);

x.color = "white";
console.log(car);
