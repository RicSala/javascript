// type cohercion refers to converting value from one type to another type


console.log(1 === '1') // false --> they are two different things. One is the NUMBER and the other is a string, so they are not equal. However...
console.log(1 == '1') // true --> ...because the == is actually using "implicit type coercion".
// Type coercion can be implicit, when it's coerced without need of the developer to do anything (like in js, that is a "weakly type language")
// or explicit, when the developer explicty gives the instruction to change the type --> we are not doing that one here.
// Relying on implicit type coercion could raise some unintended bahaviors in your code but you should be aware of it

// you can find more examples of this...

console.log(0 === false); // false
console.log(0 == false); // true --> why? again, == is using type coercion, converting 0 to false before evaluating the expresion.

console.log("123" + 4); // "1234"

console.log("+2" + 3); // "+23"

console.log("+2" * 3); // 6 --> js tries to find the way to "make it work". JS kind of things 'if "+2" was a string, it would return an error, so...it must be a number'

if (1) { console.log(true) }; // true

if (3) { console.log(true) }; // true --> numbers are "true"

object = {
    prop1: "asdf",
    prop2: 2
}

if (object) { console.log(true) } // objects are true values

// And there is certain order in type coercion.

console.log("1" + "2" / 3); //10.6666 --> first, it does 2/3 = 0.6666 --> then it concatenates "1" with "0.6666" --> "10.6666"



// you can review type coercion at https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/ [Q] ToDo




// REFERENCE:
// - https://dorey.github.io/JavaScript-Equality-Table/
// - https://academy.zerotomastery.io/courses/697434/lectures/12634733
// - https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/ [Q] ToDo
// 