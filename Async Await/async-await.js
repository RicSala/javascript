// Part of ES8
// Built on top of promises. Underneath the hook async function is a function that return a promise, but it makes code easier to read
// it's just "syntactic sugar"

// Let's see an example with the fetch function (that returns a promise - you can check that in your console, write "fetch()")

// with promises...


function fetchUserPromise() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((stringData) => stringData.json())
        .then(data => console.log(data));
}


async function fetchUsersAwait() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json();
    // TODO why is json async?
    console.log(data);
}

fetchUsersAwait();
fetchUserPromise();

// ANOTHER EXAMPLE

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// previously we had to do...

Promise.all(urls.map((url) => fetch(url).then((stringData) => stringData.json())))
    .then(console.log);

// Now we have...

async function asyncUrls() {

    try {
        const [users, posts, albums] = await Promise.all(urls.map((url) => fetch(url).then((stringData) => stringData.json())));
        console.log(users);
        console.log(posts);
        console.log(albums);
    } catch {
        console.log("ERROR");
    }

}

asyncUrls();


// FOR AWAIT OF

// remember that we could loop on and array of data with the for of loop:

loopThroughUrls = function (urls) {
    for (url of urls) {
        console.log(url);
    }

}

loopThroughUrls(urls)
// But what if we want something async in every cycle of the loop?

async function getData() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await ( request of arrayOfPromises ) {
        const data = await request.json();
        console.log(data);
    }
}

getData();
