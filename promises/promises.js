
// I create a promise that will return something in the future
const promise1 = new Promise((resolve, reject) => {
    if (true) {
        setTimeout( () => resolve("promise 1 worked!"), 3000) // the setTimeout is here just for learning purpose.
    } else {
        reject("Ouch, didn't work!")
    }
})
promise1.then((r) => console.log(r));

console.log("This was writen after the promise!");

setTimeout(() => console.log("The promise 1 is still pending..."), 2000)
// So, we are waiting for the promise to be resolve without blocking the execution of the rest of the code, thus making js behaves "async" (actually is not asyn, is just using the callback stack)


// When we have several promises and we need the information of all of them to continue, we can use the method Promise.all().
// Let's see an example

const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "value of promise 2"))

const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 6000, "value of promise 3"))

const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 6000, "value of promise 4"))

// TODO is there a way to avoid promise1? --> aparently, Promise.all() only takes the promises that are included in the array

Promise.all([promise2, promise3, promise4]).then(values => values.forEach(value => console.log(value)));



// MORE EXAMPLES

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


Promise.all(urls.map(url => fetch(url).then(resp => resp.json()) )).then(data => {
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
}
)
// in map, the fetch returns a promise and the "then" after the fetch also returns a promise so...map is returning an array of promises

// let's see what happens if something fails...


const urls2 = [
    'https://jsonplholder.typicode.com/uss',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


Promise.all(urls2.map(url => fetch(url).then(resp => resp.json()) )).then(data => {
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
}
).catch((error) => console.log("there was an error!)"))
