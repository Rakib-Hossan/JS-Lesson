/*
Variables are containers for storing data.

There are 3 ways to declare a JS variables.
    *using var
    *using let
    *using const
*/

/*********
Using var
**********/

var yourName = "Rakib";

// here var yourName means decalre a varibale named yourName
// yourName = 'Rakib" means assign "Rakib" into yourName named variable

/*********
Using let

The features of using let to declare variable:
    * variables defined with let cannot be Redeclared.
    * variables defined with let must be declared before ues.
    * Variables defined with let have Block Scope.
**********/

// let cannot be redeclared

let friendName = "Shadin";
console.log(friendName);

// let friendName = "Mortaza";
console.log(friendName); //it give error beacuse variable are redeclared.

friendName = "Mortaza";
console.log(friendName); // it is allow because here we assign new value not decalre friendName variable.

// let have Block Scope
// Variables declared inside a {} block cannot be accessed from outside the block.

let country = "bangladesh";
if (true) {
  //   console.log(country); // here country variable cannot get value be it declared outside the block
  let country = "Germany";
  console.log(country); // here country variable can get value be it declared inside the block
}

/***********
Using const

The features of using const to declare variable:
    * variables defined with const cannot be Redeclared.
    * variables defined with const cannot be Reassigned.
    * Variables defined with let have Block Scope.
***********/

// cannot be Redeclared
const gfriend = "Rony";
console.log(gfriend);
const gfriend = "Seam"; //it give error because const cannot be redeclared
console.log(gfriend);

// cannot be Reassigned
const pi = 3.1416;
console.log(pi);
pi = 40.12;
// console.log(pi);//it give error because const cannot be reassigned
