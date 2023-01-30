// FOR EACH

let numbers = [0, 1, 2, 3, 4]

let newNumbers = numbers.forEach((number) => {
    number * 2
});

console.log(newNumbers); // undefined
// why? because for each returns "undefined". It does not store anything or return anything, so "newNumbers" is not "filled"
console.log("numbers after for each: ", numbers) // the array doesn't change.

// if we wanted to do that with for each, we had to do as follows:

let newNumbers2 = []; 

const multiplyArray = (sourceArray, targetArray) => {
    sourceArray.forEach((number) => {
        targetArray.push(number * 2);
    })
    return targetArray;
}
console.log(multiplyArray(numbers, newNumbers2));


// MAP
// returns a new array after applying the callback function to each element

let arrayMap = numbers.map((number) => {
    return number * 2;
})

// we could even do...

arrayMap = numbers.map((number) => number*2)

console.log(arrayMap);

// FILTER: Creates a new array with the elements the meet certain condition
console.log(numbers.filter((num) => num > 2));


// REDUCE: 
const reduceArray = numbers.reduce(
    (accumulator, num) => accumulator + num,
    5
)
console.log(reduceArray);
// the first param is the callback function. And the result of this callback is the accumm of the next iteration
// the second param is the starting value of the accumulator

const reduceArray2 = numbers.reduce(
    (accumulator, num) => (num + 1) * 2,
    1
)
console.log(reduceArray2)

// INCLUDES
// Check the array (or string) and return true if it contains the provided value
console.log(numbers.includes(1)); // true
console.log(numbers.includes('1')); // false --> no type coercion

let name = "Ricardo Sala"
console.log(name.includes(" ")); // true



// ToDo:
// - Spread operator
 