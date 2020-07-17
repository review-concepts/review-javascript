// we can use lodash for composition
const { compose, pipe, transform } = require('lodash/fp');

let input = " javascript "

const trim = str => str.trim();
const wrapInDiv = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)))
const result1 = compose(trim, toLowerCase, wrapInDiv("div"))
const result2 = pipe(trim, toLowerCase, wrapInDiv("div"))

console.log(result)
console.log(result1(input))
console.log(result2(input))



///////////////////////////////////////////////
function add(a) {
    return function (b) {
        return a + b
    }
}

const addArrowFunction = a => b => a + b

const add1 = add(1)
const add2 = add1(2)
console.log(add2)

console.log(add(2)(3))

console.log(addArrowFunction(2)(8))



