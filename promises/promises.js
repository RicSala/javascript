
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




// finally() -- called after a promise, regardless of it resolving or rejecting.


const urls3 = [
    'https://jsonplholder.typicode.com/uss',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


Promise.all(urls3.map(url => fetch(url).then(resp => resp.json()) )).then(data => {
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
}
).catch((error) => console.log("there was an error!)")).finally(()=> console.log('extra'))

// finally would execute even if there was an error and the catch block is executed


// Promise.allSettled(): data comes back after all promises are resolved or rejected (aka, they are not pending anymore)
// returns an object with status and value/reason of each promise.

// with Promise.all() as soon as one promise fails, Promise.all rejects and receives the error of that promise

const promise5 = new Promise((resolve, reject) => setTimeout(resolve, 3000, "Gooood!!!!!"));

const promise6 = new Promise((resolve, reject) => setTimeout(reject, 2000, "6 error!!!!!!"));
const promise7 = new Promise((resolve, reject) => setTimeout(reject, 1000, "7 error!!!!!!"));


Promise.all([promise5, promise6, promise7]).then((data) => console.log(data)).catch((e) => console.log("this is Promise all writting: ",e)); // --> throws an error that we catch
// Bear in mind that we are not "avoiding errors", we are just "catching them" to be able to: continue with the process and/or notify the user.

// however if we try the same with allSettled...

const promise8 = new Promise((resolve, reject) => setTimeout(resolve, 3000, "Gooood!!!!!"));
const promise9 = new Promise((resolve, reject) => setTimeout(reject, 2000, "6 error!!!!!!"));
const promise10 = new Promise((resolve, reject) => setTimeout(reject, 1000, "7 error!!!!!!"));

Promise.allSettled([promise8, promise9, promise10]).then((data) => console.log("HERE:", data)).catch(e => console.log(e)); // the catch does not catch anything as allSettled is not sending any error
// output
// HERE: {status: 'fulfilled', value: 'Gooood!!!!!'}
// {status: 'rejected', reason: '6 error!!!!!!'}
// {status: 'rejected', reason: '7 error!!!!!!'}
// and we receive the three together once the last one is resolved



// Promise.any() --> resolves if any of the supplied promises is resolved. If none is resolved, it throws an error

const promise11 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "Gooood!!!!!"));
const promise12 = new Promise((resolve, reject) => setTimeout(reject, 2000, "6 error!!!!!!"));
const promise13 = new Promise((resolve, reject) => setTimeout(resolve, 4000, "Good but late!!"));

Promise.any([promise11, promise12, promise13]).then((data) => console.log("HERE:", data)).catch(e => console.log(e)); // catch only applies if all of them are rejected
// output
// "HERE: Gooood!!!!!"
// while allSettled returns an object with status and value/reason, any() returns the value of the first promise that resolves
