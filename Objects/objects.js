// REFERENCE TYPE
// Whenever you store a variable in JS, that variable can be store in two types of data: primitive value or reference value.
// Primitive value: number, string, boolean, undefined, null or symbol
// Reference value: everything else, objects (array is a type of object)
// On the surface, they look the same, but they behave much differently.
// If you look at the in-memory value of a primite, you will see the actual value.
// If you look at the in-memory value of a reference value, you will see an address of memory where the value is stored (a reference)

// Let's see what it means in practice:

let surname = 'Sala';
let surnameCopy = surname;

let surnameCope = "T-S";

console.log(surname); // Sala
console.log(surnameCopy); // T-S

// So far, nothig surprising: surnameCopy = surname is copying the value of surname to the new variable, thus creating a new "independent" entity (surname) with its own value
// this is because in memory variable "surname" is storing the value of the variable itself 'Sala'

// However, in a reference value, the variable is not storing the value, it's storing an address in memory where its value is stored
// So while in a primitive value variable--[points to]-- > value
// ...in a reference value: variable--[points to]-- > @memoryAddress--[points to]--> value

// Let's see what implications it has:

// we create an object (reference value)
let object1 = {
    value: 10
}
// remember that the in-memory content of variable Object1 is not the object itself, but AN ADDRESS IN MEMORY WHERE THE OBJECT IS stored 

// we declare a new variable and assign it "object1". What we are doing is assigning the new object the content of object1, aka THE ADDRESS of the first object
let object2 = object1;

// so when we change the content of that object using object1...
object1.value = 15

// we can see the same change through object2, because they are literally the same object, just two different "pointers" pointing to the same object in memory
console.log(object2.value); //15



// let's see what other consequences this has...

let name1 = "Ricardo"
let name2 = "Ricardo"

console.log(name1 === name2); //true
// This works as expected. We are comparing the actual string, and they are indeed the same string. However if we use reference values...

let personObj1 = {
    name: 'Ricardo',
    surname: 'Sala'
}

let personObj2 = {
    name: 'Ricardo',
    surname: 'Sala'
}

console.log(personObj1 === personObj2) // false
// the content of name is not the string, it's an address in memory where that string can be found. Since the address is not the same, the two variables are not equal


// CONTEXT vs scope
// context: what is the OBJECT environment? in what object are we? (you get it by using the keyword "this")
// is the object that a function is called as a method of. For example, window is the context of "console.log()"
// scope: refers to the visibility of variables
// so if we do...

console.log(this); //window

// even if we do...

const a = function () {
    console.log(this); //window
}
// because technically, even inside the function, we are still in the context of window
// however if we do:

const a2 = {
    anyFunction: function () { console.log(this) } // a2
}
a2.anyFunction(); // a2
// why? because now the context is a2. By using the object a2, now the new "universe" in which the console.log is run is a2, and not the window object.
//  [Q]: how does this relates to the stack??

// it's interesting to see that if we use an arrow function, the context is still window...[Q] why does this happen?
const a3 = {
    anyFunction: () => { console.log(this) }// window
}
a3.anyFunction(); 

// however, it does not happen with anonymous non arrow functions...!
const a4 = {
    anyFunction: function () { console.log(this) }// window
}
a4.anyFunction();


// INSTANTIATION (classes)
// Making instances or multiple copies of an object

// [Q]: Need to review and extract this on its own file for 'class'

class Player {
    constructor(name, type) {
        console.log("player", this); // Wizard --> [Q]: why? isn't the context Player now?
        this.name = name,
        this.type = type
    }

    introduce() {
        console.log(`hi, I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, trick) {
        super(name, "wizard");
        console.log("wizard", this) // Wizard
    }

    magicTrick() {
        console.log(`As I am a ${this.type}, I can make things levitate!`);
    }
}

const wizard1 = new Wizard("Ricardo", "levitate"); // This is instantiation
wizard1.introduce();
wizard1.magicTrick();


// Object.keys, .values and . entries.

// Let's say we want to interate this object and get an array with the name of all the players.
let team = {
    Captain: "Santa",
    Goalkeeper: "Rudolf",
    Cheerleader: "Grich"
}

// Object.keys --> given an object, it returns an array with the keys of properties
// before ES8, this is how it was done:

let namesArray = [];

Object.keys(team).forEach((player) => {
    namesArray.push(team[player]);
})

console.log(namesArray);

// Object.values --> given an object, it returns an array with the values of properties. ES8 (2017)
// now we can access the values of the object without using the keys

let namesArray2 = [];

Object.values(team).forEach((player) => {
    namesArray2.push(player)
});

console.log(namesArray2);


// Object.entries --> given an object, it returns an array of arrays, in which [0] has the property keys and [1] the property values ES8 (2017)
// so we could could do...

let namesArray3 = [];

Object.entries(team).forEach((player) => {
    namesArray3.push(`${player[0]} - ${player[1]}`);
})
console.log(namesArray3);


// FROMENTRIES
// Given an array of arrays, it returns an object using the values of the array ([0]: keys, [1]: values)

let agesArray = [["Ricardo", 37], ["Mamen", 39], ["Pablo", 30]];
console.log(agesArray);

let agesObject = Object.fromEntries(agesArray);
console.log(agesObject);

// and we could go back to array using Object.entries...
let newAgesArray = [];
newAgesArray = Object.entries(agesObject);
console.log(newAgesArray);

// OBJECT SPREAD OPERATOR
// REFERENCE: https://www.javascripttutorial.net/es-next/javascript-object-spread/

// In ES6, we had the spread operator (...) to unpack elements of an array. It is useful for things like...
// copying arrays(Remember that arrays are reference objects, so we cannot do const cloneArray = oldArray as this will results on to varaibles pointing to the same object)

const oldArray = [0, 1, 2, 3]
const newArray = [...oldArray]
console.log("new Array: ", newArray); // [0, 1, 2, 3]

// now (ES2018) the spread operator is also available for objects

// So we can copy...
const oldRectangle = {
    height: 10,
    width: 20
}

const newRetangle = { ...oldRectangle };

console.log(newRetangle) // {heigh: 10, width: 20}

// copy adding new properties...

const coloredRectangle = {
    ...newRetangle,
    color: "blue"
}

console.log(coloredRectangle); // {height: 10, width: 20, color: 'blue'}

// merge two objects...

const style = {
    color: "blue",
    border: "none"
}

const styledRectangle = {
    ...newRetangle,
    ...style,
}
console.log(styledRectangle); //{height: 10, width: 20, color: 'blue', border: 'none'}

//...or even "decompose" objects:

const { color, border, ...nonStyledRectangle } = styledRectangle;

console.log(nonStyledRectangle); //{height: 10, width: 20}




// Reference:
// For reference values vs primitives: https://ui.dev/primitive-vs-reference-values-in-javascript