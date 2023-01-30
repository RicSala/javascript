let sibsArray = ["Mamen", "Ricardo", "Pablo"]

let sibsObject = {
    sister: "Mamen",
    brother1: "Pablo",
    brother2: "Ricardo"
}


// FOR -> Only for arrays

for (i = 0; i < sibsArray.length; i++) {
    console.log(sibsArray[i]);
}


// WHILE
let j = 0;
while (j < sibsArray.length) {
    console.log(sibsArray[j]);
    j++;
}

// DO WHILE
j = 0;
do {
    console.log(sibsArray[j]);
    j++;
} while (j < sibsArray.length)


// FOR EACH
console.log("\nFOR EACH__________")
sibsArray.forEach((sibling) => console.log(sibling));


// FOR OF - Arrays
console.log("\nFOR OF__________")
for (sibling of sibsArray) {
    console.log(sibling);
}

// for (sibling of sibsObject) {  ---> Cannot do that because you cannot iterate in an object!
//     console.log(sibling);
// }


// FOR IN
console.log("\nFOR IN__________")
for (sibling in sibsObject) {
    console.log(sibsObject[sibling]);
}

// if we were to access the properties...
console.log("\nFOR IN__________")
for (sibling in sibsObject) {
    console.log(sibling);
}


// [Q]: ToDo: Iterables vs enumerables