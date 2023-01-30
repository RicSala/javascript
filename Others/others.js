// BigInt (ES2020)
// BigInt is a new type in JS. when using numbers, in js we have a limit of the range of values that we can use until the computations done with them start to get messed
// that number is store in the global variables...

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// If we do some maths with numbers that are outside of those limits, the computatios start to get wrong...

console.log(9007199254740991 + 10000); // 9007199254750992 -> which is indeed incorrect.

// when we need to do calculations with those large numbers, we use BigInt type using the "n" notation:

let bigNumber = 9007199254740991n - 1n;
console.log(typeof (bigNumber)); // bigint
console.log(bigNumber); // 9007199254740990n


// OPTIONAL CHAINING OPERATOR ?.
// the ?. operator checks if the property before it exist. If it does, it works as the dot (.) operator. If it doesn't, it returns "undefined" instead of triggering an error

let will = {
    pikachu: {
        species: "mouse",
        heigth: 0.4,
        weight: 0.6
    }
}

let andrei = {
    raichu: {
        species: "mouse",
        heigth: 0.8,
        weight: 0.9
    }
}

// imagine that we want to store in a variable the weight of Andrei's pikachu if he has one. Before we would do...
let weight = 0;

if (andrei.pikachu) { weight = andrei.pikachu.weight }
else { weight = undefined }
console.log(weight);
// With the ?. operator we can do just...
let weight2 = andrei.pikachu?.weight;
console.log(weight2);

// if we try with a pokeon that he has...
let weight3 = andrei.raichu?.weight;
console.log(weight3); // 0.9




// NULLISH COALESING OPERATOR ??
// while the || operator considers some values like 0, the empty string, ...as faulty (thus false), the ?? operator only considers "false" the types NULL and undefined
// The ?? operator (nullish coalescing) returns the first operand that is not null or undefined

// let's try it out...
console.log("NULLISH COALESING OPERATOR ??_____________")
if (!(false || 0)) {
    console.log("both operands are false for ||")
}
 
// let condition = false ?? "";
// console.log(condition);

// // if (null ?? 0) {
// //     console.log("at least one operand is true");
// // }

// [Q]: ToDo: review the ?? 