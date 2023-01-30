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
// Checks the array (or string) and return true if it contains the provided value
console.log(numbers.includes(1)); // true
console.log(numbers.includes('1')); // false --> no type coercion

let name = "Ricardo Sala"
console.log(name.includes(" ")); // true


// FLAT
// returns a "flat" version of the array (meaning, pops nested arrays into the outter array) as many levels as provided in the param (being 1 the default).
// it also deletes any entry of the array that is empty

let arrayToFlat = ["water", ["bananas", "apples", "oranges"], "yogurt"]
console.log(arrayToFlat); // ['water', Array(3), 'yogurt']
console.log(arrayToFlat.flat()); // ['water', 'bananas', 'apples', 'oranges', 'yogurt']
console.log(arrayToFlat); // ['water', Array(3), 'yogurt']

let deeperArray = ["water", ["bananas", [" green apples", "red apples"], "oranges"], "yogurt"]
console.log(deeperArray.flat()); // ['water', 'bananas', Array(2), 'oranges', 'yogurt']
console.log(deeperArray.flat(2)); // ['water', 'bananas', ' green apples', 'red apples', 'oranges', 'yogurt']

let arrayWithEmpty = ["water", , , , "bananas", "yogurt", , ,]
console.log(arrayWithEmpty); // (8) ['water', empty × 3, 'bananas', 'yogurt', empty × 2]
console.log(arrayWithEmpty.flat()); // (3) ['water', 'bananas', 'yogurt']
// thus it can be useful to "clean up" arrays

// FLATMAP
// returns a new array formed by mapping the array using the map function, and then flats it one level.
// it the same as doing first map() and then flat() (but more efficient)
// image you have a array of sentences, and you want to generate an array of the words that there are in those sentences:

let sentences = [
    "It's super sunny",
    "in Barcelona",
    "almost every single day",
    "because Barcelona is close to the sea"
]

// you could do it using map and flat...
let wordList = [];
sentences.map((sentence) => {
    wordList.push(sentence.split(" "))
})
console.log(wordList); //[Array(3), Array(2), Array(4), Array(7)]
wordList = wordList.flat();
console.log(wordList); //["It's", 'super', 'sunny', 'in', 'Barcelona', 'almost', 'every', 'single', 'day', 'because', 'Barcelona', 'is', 'close', 'to', 'the', 'sea']

// or you can do it with a single flatMap:
wordList = []; // just cleaning the variable to show the example;
console.log(wordList);

console.log(sentences.flatMap((sentence) => sentence.split(" "))) 
console.log(sentences.flatMap((sentence) => { sentence.split(" ")})) 
            


// ToDo:
// - Spread operator

// Reference:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 