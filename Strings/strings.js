// [Q] ToDo: intro to strings.

// ...
// ...

// padStart(input) and padEnd(input) --> add spaces to the start or the end of the string so the total number of chars of the string is input
// Usefull if you want to align strings of text 
// Examples:

console.log("Ricardo Sala".padStart(50)); //                                      Ricardo Sala
console.log("life long learner and entrepreneur".padStart(50)) //                 life long learner and entrepreneur
//  So the text is perfectly aligned to the right.

// or you can use padEnd to align the next string...
console.log("Ricardo".padEnd(20), "Student");        //Ricardo              Student
console.log("Luis Miguel".padEnd(20), "Developer");  //Luis Miguel          Developer


// TRIMSTART AND TRIMEND
// return a String removing trailing white spaces and line terminator and the start/end

let email1 = "ricardo@gmail.com      "
let email2 = "     mamen@gmail.com"
let email3 = "      pablo@gmail.com      "

console.log(email1.trimEnd()); // ricardo@gmail.com
console.log(email2.trimStart()); // mamen@gmail.com
console.log(email3.trimStart().trimEnd()); // pablo@gmail.com
