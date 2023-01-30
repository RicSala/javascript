// THE ROADMAP
// - https://www.youtube.com/watch?v=57GuRoJ5Bfw
// - https://www.youtube.com/watch?v=aeKQy_08fpk


// TYPES
// ---------------------

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (New in ECMAScript 6)
// 7. Object
// 8. BigInt


// COMPARISONS
// ---------------------
// !==
// ===
// =
// <=
// >
// >

// OPERATORS
// ---------------------
// Apart from the classic +, -, /, *. ES7 (ES2016) introduced ** (the exponential operator)

console.log(2 ** 3); // 8

// LOGICAL OPERATORS
// ---------------------
// &&
// ||
// !
    

// VARIABLES
// ---------------------
// var --> still works and has different scope than let.
// let --> variables that change
// const --> constants

// let vs const
// let variables can be changed
// const variables cannot be change nor declare twice
// we will use "try" "catch" to demostrate this. We still don't know what those do but for now keep in mind that "catch" will be executed in case there is an
// error in the "try" block.
const constantVariable = "you can't change this variable"
try {
    constantVariable = "I am trying to change this variable"
}
catch (error) {
    console.log("You cannot change a const variable")
}

// Another thing about const:
// if the variable is an object, you cannot reassign the object, but you can change the object properties

const person = {
    name: "Ricardo",
    age: 37
}

console.log(person.age);

person.age = 38;
console.log(person.age);

//you can even create new properties
person.surname = "Sala";
console.log(person.surname);

// but you cannot reassign it to another instance...
try {
    person = {
        name: "Pablo",
        age: 30,
        surname: "Sala"
    }
    console.log(person.name);
} catch (error)
{
    console.log("error: you cannot change the object");
}

//you would need to change it's properties one by one 
person.name = "Pablo";
person.age = 30;
person.surname = "Sala";
console.log(person.name, person.surname, person.age)


// var vs let
// - let is block scope while var is function scope.

console.log("VAR VS LET");
function hello() {
    var a = "hello";
    if (a === "hello") {
        let b = " world";
        console.log(a, b); // "hello world"
    }
    try {
        console.log(a, b); // error, because b cannot be access from here (b is declared in the block of the if)
        }
    catch (error)
        {
        console.log("ERROR: b cannot be accesed outside the if block")    
        }
}
hello();
try {
    console.log(a, b); // error, because non of them exist here
}
catch (error) {
    console.log("ERROR: neither a nor b can be accessed from outside the function")
}

// let does not allow to redeclare variables, var does
// try { //we have to put both inside try because, interistingly, try changes the scope
//     let b = "hello world"; --> [Q] we cannot even do it inside a try catch!!
//     let b = "hello again!";
//     console.log(b);
// }
// catch (error) {
//     console.log ("you cannot declare the variable with let again")
// }

// redeclaring a variable with a different scope or block changes the value of the outer variable too

var c = "hello"
console.log(c) // "hello"
{
    var c = "bye bye!"
    console.log(c); //"bye bye"
}
console.log(c);




// hoisting does not occur in let, but it does in var

// naming rules
// - only letters, numbers, _ and &
// - don't use reserve words (below)
// - can't start with a number
// - It's convention to use camelCase (vs snake_case)

// What makes a good variable name
// - clear and descriptive names (but keep it concise)


// CONDITIONALS
// ---------------------
// if
// else
// else if

console.log("CONDITIONALS__________")


function howManySiblings(sibs) {

    if (sibs.length === 3) {
        console.log("The three siblings are here")
    } else if (sibs.length === 2) {
        console.log("someone is missing")
    } else {
        console.log( sibs[0]+",", "you are alone!")
    }
}

let siblings = ["Pablo", "Mamen", "Ricardo"];
howManySiblings(siblings); // "The three siblings are here"

let siblings2 = ["Pablo", "Mamen"];
howManySiblings(siblings2); // "someone is missing"

let siblings1 = ["Pablo"];
howManySiblings(siblings1); // "you are alone!"

// ternary operator
// equivalent to and if else statement but more concise.

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied"
// this is equivalent to...
console.log(answer); // "You may enter"

var answer;

if (isUserValid(true)) {
    answer = "You may enter";
} else {
    answer = "Access denied"; 
}
console.log(answer); // "You may enter"
// It's interesting to see that the ternary operator can be use as if it was the value it returns (it's an expression, not an instruction...?) [Q]


// switch

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you moved forward";
            break;
        case "backwards":
            whatHappens = "you moved backwards";
            break;
        case "right":
            whatHappens = "you moved to the right";
            break;
        case "left":
            whatHappens = "you moved to the left";
            break;
        default:
            whatHappens = "that's not a valid movement";
            break;
    }
    return whatHappens;
}

console.log(moveCommand("forward"));
console.log(moveCommand("backwards"));
console.log(moveCommand("asdfñl"));

// Why do we need the "break" kw? why js needs it? --> because it won't stop checking the next conditions. AKA: "cases" are not mutually exclusive unless we use the break keyword!
// let's check that out...

// [Q] not working, check why!
// function describePerson(person) {
//     let description = "Our person... ";
//     switch (person) {
//         case person.hasAdog:
//             description = description + " has a dog";
//             break;
//         case person.isAdult:
//             description = description + " is an adult";
//         case person.livesInBarcelona:
//             description = description + " lives in Barcelona";
//     }
//     return description;
// }

// let person = {
//     hasAdog: true,
//     isAdult: true,
//     livesInBarcelona: true
// }

// console.log(describePerson(person));

// LOOPS
// ---------------------
// for ()
// while ()
// do { }
// forEach


// FUNCTIONS
// ---------------------
// var a = function name () {}
// function name () {}
// return
// () =>
// instead of writting:
sum = function (a, b) {
    return a + b;    
}
console.log("SUMA 2 Y 3", sum(2, 3));

// you can write:
const sumArrow1 = (a, b) => {
    return a + b;
}
console.log("SUMA 2 Y 3", sumArrow1(2, 3));

// or even...
const sumArrow2 = (a, b) => a + b;
console.log("SUMA 2 Y 3", sumArrow2(2, 3));


// JAVASCRIPT KEYWORDS
// ---------------------
// break: terminates the current loop, switch,...and transfer control to the statement following the terminated statement
// case:
// catch: catch error
// class: declare classes
// const: declare constants
// continue
// debugger
// default
// delete
// do: do while loop
// else: conditional statements
// export
// extends: extending a class
// finally
// for: loop
// function: declare function
// if
// import: import library
// in
// instanceof
// new
// return: returns the value and terminates the function
// super: to call the parent constructor (with parenthesis), to access parent properties. It's a kw, not a varialbe (you cannot console.log super)
// switch
// this: refers to the object that is executing the current piece of code.
// throw: throws a user defined exception. Execution of the current function will stop and control move to the first catch
// try
// typeof
// var: declare variables
// void
// while: loop
// with
// yield

// DESTRUCTURING
// allows us to simplify how we access object properties

const newPerson = {
    name: "Mamen",
    surname: "Sala",
    Age: 39
}

const { name, surname } = newPerson;
console.log(name);
console.log(surname);

// it equivalent to:
// const name = newPerson.name;
// const surname = newPerson.surname;

// we can also simplify how we create new objects

const aVar = "Mamen";
const bVar = "T-S"
let cVar = 60;

let momPerson = { aVar, bVar, cVar };
console.log(momPerson);
// the previous code is the equivalent of doing...

let momPerson2 = {
    aVar: aVar,
    bVar: bVar,
    cVar: cVar
}
console.log(momPerson2);


// we can also create dynamic object property names...
let propertyName1 = "name"
let propertyName2 = "surname"

let dynamicPropObject = {
    [propertyName1]: "Ricardo",
    [propertyName2]: "Sala"
}

console.log(dynamicPropObject.name, dynamicPropObject.surname);

// we could even do...
console.log(dynamicPropObject[propertyName1], dynamicPropObject[propertyName2]);

// Template literals and string INTERPOLATION

const myName = "Ricardo"
let age = 37;
// instead of this, 
let phrase = "hey, my name " + "is " + myName + " and I am " + age + " y.o.";
console.log(phrase);
// we can do now...
phrase = `hey, my name is ${myName} and I am ${age} y.o. I am gonna be ${age+1} nxt year`
console.log(phrase);

// FUNCTION DEFAULT ARGUMENTS

function greetings(name = "Ricardo", age = 37) {
    console.log("hello, my name is " + name + " and I am " + age + "y.o.")
}
//this will show the defaults
greetings();

// this will show the provided values
greetings("Pablo", 30)

// if we don't provide a value, we should use undefined so it knows it has to use default
greetings(undefined, 39);


// SYMBOLS
// new primitive type introduced by ES6.
// Completely unique identifiers
// they are primitive (like Number, String, Boolean)
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym1 === sym3);
console.log(sym1 == sym3);
// you can see they are primitives...
console.log(typeof sym3);


// CLOSURES

let count = 0;

const countBirds = () => {
    count += 1;
    console.log(count + " birds");
}

const countDogs = () => {
    count += 1;
    console.log(count + " dogs");
}

countBirds(); // 1
countBirds(); // 2
countBirds(); // 3
countDogs(); // 4 --> they are both using the variable count, and it has the same scope (global)
// as the program gets more complex, the problem of a global variable being use (unwillingly) is more likely
// specially when the code can be use by someone else (like in libraries)

// We could create a unique variable for each counter, but if we have hundreds of counters...it gets complicated
// and it's actually not necesary to have all those variables at the global scope
// closures help this problem
// A closure is a function with access to is own private variables, to which nobody else has access

// to solve this, we will make use of the fact that: i) we can nest functions and ii) inner funcions have access to outter function variables

const makeDogHouse = () => {
    let dogs = 0;
    const showDogs = () => {
        dogs++;
        console.log(dogs)
    }
    return showDogs;
}

const house1 = makeDogHouse() //the makeDogHouse func executes, and pass dogs to showDogs, creating a new scope for the dog variable

const house2 = makeDogHouse() //everytime we call makeDogHouse, a new "dogs" variable is passed to the inner function, thus allow to keep the counting separated

console.log("DOG HOUSE 1: ")
house1();
house1();
house1();

console.log("DOG HOUSE 2:")
house2();
house2();
house2();

// Where are closures used:
// distributing sofware packages (jquery, moment.js, underscore.js)
// Express middleware.


// CURRYING

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

console.log(multiply(2, 5));
console.log(curriedMultiply(2)(5));

const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(3));

// where would I want to do this [Q] 👆🏻

// COMPOSITION
// being f and g functions...
const compose = (f, g) => (a) => f(g(a));

const sumCom = (a) => a + 1;

console.log(compose(sumCom, sumCom)(5)) // 7
// the compose function takes two funtions and returns a function that "compose" ("applies") those two functions
// you will find tools and libraries that use closures, currying and composition heavily


// When working with functions try to
// Avoid side effects -> avoid changing elements outside the function
// Functional purity -> avoid side effects + always return something 
// ...so we get deterministic functions: for the same inputs, you always get the same outputs