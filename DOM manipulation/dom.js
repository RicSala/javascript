// ToDo: explanation of the DOM

// The DOM is not the source code
// The javascript engine
// the document object
// the window object
// [Q] why sometimes we do Window and other times we do window ?


// DOM SELECTORS

// getElementsByTagName()
console.log((document.getElementsByTagName("p")));
console.log((document.getElementsByTagName("ul")));

// getElementsByClassName()
console.log(document.getElementsByClassName("fruit"));

// getElementById()
console.log(document.getElementById("description"));

// querySelector() --> select the first element using CSS selector
console.log(document.querySelector(".fruit.apples"));

// querySelectorAll() --> select all the elements that match a CSS selector
console.log(document.querySelectorAll(".fruit"));


// ATRIBUTE MANIPULATION
let element = document.getElementById("description")

// getAtribute()
console.log(element.getAttribute("type"));

// setAtribute()
element.setAttribute("type", "fruit list");
console.log(element.getAttribute("type"));


// CHANGING STYLES
let h1 = document.getElementsByTagName("h1")[0];
console.log(h1);

// style.{property}

// className --> subtitute whatever is in class with the provided string
h1.className = "title"
h1.className = "anotherTitle"

// classList --> property of the element that offers several methods for adding and removing classes
// classList.add()
h1.classList.add("second-class");
h1.classList.add("third-class");

// classList.remove()
h1.classList.remove("third-class");

// classList.toggle() --> sometimes in code we need to "toggle" (aka: add if it's not there, remove if it's there). Instead of using ifs, we can use toggle..
h1.classList.toggle("done");

// parentElement

// children

// innerHTML --> WARNING! Every time innerHTML is set the html has to be parse and the whole dom constructed again

// document.createElement()

// element.appendChild()

// document.createTextNode()



// It's important to save selectors in variables if we are gonna reuse them, in order to avoid keep search for the element each time

// ToDo: finish
// ToDO: understand why / if innerHTML really refresh everything
// Inspect window --> Esc --> Rendering --> shows you the elements that get updated as you browse the window

