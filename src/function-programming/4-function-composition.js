let input = "  Javascript   "

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`

// function composition
const result = wrapInDiv(trim(input))

console.log(result)