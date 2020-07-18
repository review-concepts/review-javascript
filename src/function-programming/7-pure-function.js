// pure functions

// same arg = same result

// first better to determine what functions are not pure function

// example:
// this funtion is not pure function , becouse every time calling this function generate new number
function ranNumber(number) {
    return number * Math.random()
}
// so what about this:
// its pure function
function ranNumber1(number) {
    return number * 2 ;
}
// pure function notices:
// 1) no random number
// 2) no current date/time
// 3) no global state (DOM/ files/ db)


// now think about this:
let minAge = 10
function compareWithGlobal(age) {
    return age > minAge  // this compare age with global variable , so its not pure function
}
// how can we change that to pure funtion?
function comarePureFunction(age, minAge) {
    return age > minAge        // do u see? there is not any global variable, so its pure function
}

// what is benefits of pure function ?
/*
    self-documentation
    easily testable
    concurrency
    cacheable

 */
