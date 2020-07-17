// we can use lodash for composition
const { compose, pipe, transform } = require('lodash/fp');

let input = " javascript "

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)))
const result1 = compose(trim, toLowerCase, wrapInDiv)
const result2 = pipe(trim, toLowerCase, wrapInDiv)

console.log(result)
console.log(result1(input))
console.log(result2(input))