// HOF :
// take function as argument
// return fucntion


let numbers = [1,2,3]
numbers.map(number => number *2) // map take function as argument so its HOF
// another example
setTimeout(() => {
    console.log("hello"), 1000
}) // its also HOF