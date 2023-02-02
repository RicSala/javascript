// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise ((resolve, reject) => {
  setTimeout(() => resolve("success"), 2000)
})

promise.then((res, rej) => console.log(res))

// #1) Create a promise that resolves in 4 seconds and randomly resolves or rejects

const promiseRandom = new Promise((resolve, reject) => {
  
  setTimeout(() => {
    randomNumber(0,1)? resolve("success") : reject("Rejected!")
  }, 4000)

})

promiseRandom.then((res, rej) => console.log(res)).catch((rej) => console.log(rej))

function randomNumber(min, max) {
  return (Math.floor((Math.random() * (max - min + 1))) + min)
}

// #2) Run the above promise and make it console.log "success" -> DONE


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

const promise3 = Promise.resolve(() => {
  setTimeout(() => console.log("Promise.resolve() --> success"), 5000)
})
// TODO: don't get how this works...


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(console.log('Something went wrong!'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map((url) => fetch(url).then((stringData) => stringData.json()))).then((data) => {
  console.log(data[0]);
}).catch((e) => console.log("ERROR!"));
  
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

const urls2 = [
  'http://swapiv/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls2.map((url) => fetch(url).then((stringData) => stringData.json()))).then((data) => {
  console.log(data[0]);
}).catch((e) => console.log("ERROR!", e));