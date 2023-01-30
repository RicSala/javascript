// ToDo: Move here the part about reference type vs primitive type

// So how can we create a new object that is a copy of (not the same as) other object?

// Arrays:

let array1 = [1, 2, 3, 4];
let array2 = array1;

array2.push(5);
console.log(array1); // (5) [1, 2, 3, 4, 5]

// because as we said, we are indeed modifying the same object in memory.
// we can fix that by creating a new array in memory, a "copy", as follows:

array2 = [...array1];
array1.push(6, 7, 8);
console.log(array1); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(array2); // [1, 2, 3, 4, 5] --> what we do to array1 does not affect array2 anymore, because they are different objects in memory.

// we could also do...

let array3 = [].concat(array1);

// now if we modify array1...
array1.push(9, 10);

// it does not affect array3
console.log(array3); // [1, 2, 3, 4, 5, 6, 7, 8]


// Objects:

let person1 = { 
    name: "Ricardo",
    surname: "Sala"
}

// if we assign it to another variable, the variables will be just two "pointers" (aka: they will be storing an address in memory, where the object is, the same address pointing to the same object!)

let person2 = person1;
person2.name = "Miguel";
console.log(person1.name); // Miguel
// what we did to person2, modified person1, because the are actually the same object, in the same place in memory.

// what if we want a copy? a clone? --> We can do:

person2 = Object.assign({}, person1);
// We are creating a copy. So, now, what we do to person2...
person2.name = "Elvira";
// does not affect person1
console.log(person1.name); // Miguel
// Because they are two different objects, in two different parts of memory
console.log(person2.name); // Elvira --> just for checking.

// Another method would be using the spread operator

let person3 = { ...person2 }; // remember, person2.name = "Elvira"
// if we now modify person3 name...
person3.name = "Paco";
// it does not affect person2 name
console.log(person2.name); // Elvira
// Because they are indeed different objects in the memory
console.log(person3.name); // Paco --> just for checking

// BUT this methods only go one "level deep". What we are actually saying is something like this:
// "javascript, instead of coping what is in this variable (which is an address, and I don't want to copy the address), copy whatever is in the address that the object is pointing two"
// if variable of reference type are like this: variable --[points to]--> @address in memory --[points to]--> object
// what we are doing is "going directly" to the "second level" (in the case above the "object")
// But what if we have an object inside an object?
// The object property is not storing a primitive (aka, a "value"). It's storing the address of the "inner object" and that's what, using the methods above, will get copied: a reference to the same inner object.
// let's demostrate that:

let outter = {
    number: 3,
    object: {
        innerProperty: "hello"
    }    
}

let outter2 = { ...outter }
console.log(outter.object.innerProperty); // hello

outter2.object.innerProperty = "bye bye";
console.log(outter.object.innerProperty); // "bye bye"
console.log(outter2.object.innerProperty); // "bye bye"
// As you can see, the innerProperty is still a unique instance in memore "shared" by both objects.
// How can we solve that? We can do...

outter2 = JSON.parse(JSON.stringify(outter)); // stringify just converts outter into a string, and parse converts it back to an object. It's like saying..."give me the final real values of everything inside, not any address"
// so now if we modify outter2...
outter2.object.innerProperty = "welcome back!";
console.log(outter2.object.innerProperty); // "welcome back"
// it doesn't affect outter
console.log(outter.object.innerProperty); // "bye bye"

// WARNING: this is very rarely used in real like and could have some performance issues if there are a lot of levels (nested objects).





