// there are two kind of built-in type
// primitive / value types
// reference types

/*
primitive / value types :
* string
* number
* boolean
* undefiend
* null
* */

let name = "ramin"; // string literal
let age = 21; // number literal
let isApproved = false; // Boolean literal
let firsName = undefined; // Undefiend literal, Value and type both iof them undefiend
let selectColor = null // Null variable, Null is object

// Dynamic Typing / Static Typing
/*  javascript is dynamic typing
*   Dynamic typing: we can change variable at run time in the future
*   Static typing: we can't change variable at run time
*
*
example:
age
21

typeof age
"number"

age = "sixteen"
"sixteen"

typeof age
"string"
*/



/*
* Reference Types:
* Object : we put related properties inside object
* Array
* Function
* */


// Object
let person = {
    name: 'ramin',
    age: 30
}

// dot notaion
person.name = "masoud";
// bracket notaion
person['name'] = "mary"

// Array : type of array is object in javascript
let selectedColors = ['red', 'blue']

// Function: building block of javascript

/*
*  function with return: calc
*  function without return : performing task
* */
function greet(name, lsName) {
    console.log(name, lsName)
}

greet('ramin', 'rostami')
