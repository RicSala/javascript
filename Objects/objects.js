// reference type

console.log([] === []); //false
console.log([1] === [1]); //false

let object1 = {
    value: 10
}

let object2 = object1;

let object3 = {
    value: 10
}

console.log(object1 === object2); // true
console.log(object1 === object3); // false

object1.value = 15;
console.log(object2.value); //15
// why? because the two variable are actually pointing to the same object. object2 is NOT copy of Object1, it's the same one

