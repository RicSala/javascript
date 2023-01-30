

let button = document.getElementsByTagName("button")[0];

button.addEventListener('click', () => console.log("click"));

// https://developer.mozilla.org/en-US/docs/Web/Events

// everytime we add an evenListener, the callback function of the paramenter receives the object "event" that contains information about the event that triggered the function

button.addEventListener('mouseenter', (event) => console.log(event));

let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");

addKeyListener = function (element, keyCode) {
    window.addEventListener("keydown", (event) => {
        // console.log(event.key);
        if (event.key === keyCode ) {
            console.log(event.key);
        }
    });
}

addKeyListener(up, "ArrowUp");
addKeyListener(up, "ArrowDown");
addKeyListener(up, "ArrowRight");
addKeyListener(up, "ArrowLeft");