/*

Javascript operators are used to perform different types of mathematical and logical computations.

There are different types of JavaScript operators:

    * Arithmetic Operators
    * Assignment Operators
    * Comparison Operators
    * String Operators
    * Logical Operators
    * Bitwise Operators
    * Ternary Operators
    * Type Operators

*/

/**********************
 Arithmetic Operators
 **********************/

/*
Arithmetic operators perform arithmetic on numebers.
Arithmetic operators in JS:
#   ( + )	Addition
#   ( - )	Subtraction
#   ( * )	Multiplication
#   ( / )	Division
#   ( % )	Modulus (Remainder)
#   ( ** ) 	Exponentiation
#   ( ++ ) 	Increment
#   ( -- ) 	Decrement
*/

/*
A typical arithmetic operation operates on two numbers or variables or experssions
*/

// ( + )Addition

let x = 10 + 20;
console.log(x);

// The numbers (in an arithmetic operation) are called operands.
// The operation (to be performed between the two operands) is defined by an operator.

// ( - )Subtraction
let y = 30 - 20;
console.log(y);

// ( * )Multiplication
let z = 30 * 20;
console.log(z);

// ( / )Division
let d = 30 / 20;
console.log(d);

// ( % )Modulus (Remainder)
let m = 30 % 20;
console.log(m);

// ( ** )Exponentiation
let e = 3 ** 2;
console.log(e);

// ( ++ )Increment
let i = 3;
i++;
console.log(i);

// ( -- )Decrement
let de = 3;
de--;
console.log(de);

/**********************
 Assignment Operators
 **********************/

/*
 Assignment operators assign values to JavaScript variables.

 Assignment operators in JS:
    #   ( = ) 	Simple Assignment Operator
    #   ( += )	Addition Assignment Operator
    #   ( -= )	Subtraction Assignment Operator
    #   ( *= )	Multiplication Assignment Operator
    #   ( /= )	Division Assignment Operator
    #   ( %= )	Remainder Assignment Operator
    #   ( **= ) Exponentiation Assignment Operator
 */

// ( = ) Simple Assignment Operator

// The Simple Assignment Operator assigns a value to a varibale.

let sim = 786;

// ( += ) Addition Assignment Operator

// The Addition Assignment Operator adds value to a variable.
let addAssign = 20;
addAssign += 25; // addAss+=25 means addAss = addAss + 25
console.log(addAssign);

// ( -= ) Subtraction Assignment Operator

// TThe Subtraction Assignment Operator subtracts a value from a variable.
let subAssign = 20;
subAssign -= 5; // subAssign-=5 means subAssign = subAssign - 5
console.log(subAssign);

// ( *= ) Multiplication Assignment Operator

// The Multiplication Assignment Operator multiplies a variable.
let mulAssign = 20;
mulAssign *= 5; // mulAssign*=5 means mulAssign = mulAssign * 5
console.log(mulAssign);

// ( /= ) Division Assignment Operator

// The Division Assignment Operator divides a variable.
let divAssign = 20;
divAssign /= 5; // divAssign/=5 means divAssign = divAssign / 5
console.log(divAssign);

// ( %= ) Remainder Assignment Operator

// The Remainder Assignment Operator assigns a remainder to a variable.
let remAssign = 20;
remAssign %= 5; // remAssign%=5 means remAssign = remAssign % 5
console.log(remAssign);

// ( **= ) Exponentiation Assignment Operator

// The Exponentiation Assignment Operator raises a variable to the power of the operand.
let expAssign = 20;
expAssign **= 5; // expAssign**=5 means expAssign = expAssign ** 5
console.log(expAssign);
