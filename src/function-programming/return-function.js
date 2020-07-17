function sayHello() {
    return function () { // anonymous function
        return "hello world"
    }
}

let fn = sayHello()
let message = fn()

console.log(message)