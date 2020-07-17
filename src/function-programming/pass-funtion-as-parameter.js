function sayHello() {
    return "HEllo world"
}

function greet(fnMessage) {
    console.log(fnMessage())
}


// sayHello() is reference to function. we pass reference of function
// sayHello() function
greet(sayHello)