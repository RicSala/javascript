// let's make an exercise

var a = "a var in the global scope";

console.log(a);

function createLocalVar() {
    var a = "a var in the local scope --> It's a new variable that is know only in this scope (inside this function)";
    // and by doing this, we are defining what "a" means in this scope
    // this is called a naming conflict
    console.log(a);
    // it's interesting to see that we can still acces the global a var by using the kw "this", but we'll see that later
    console.log(this.a, "what is this?")
}
createLocalVar();
console.log(a, " <-- as you can see, the a var in the global scope was not modified");

function accessGlobalVar() {
    a = a + " <-- I can modify the variable inside the function - (though is not recommended)";
    console.log(a);
}
accessGlobalVar();
console.log(a, "and this is proof it's the same variable")
