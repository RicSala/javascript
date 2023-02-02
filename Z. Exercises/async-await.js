// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

async function fetchUsers(url) {
  const response = await fetch(url);
  const users = await response.json();
  console.log(users);
}

fetchUsers("https://jsonplaceholder.typicode.com/users/");

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  
  const [users, posts, albums] = await Promise.all(urls.map(async function (url) {
    const response = await fetch(url);
    return response.json();
  }))
  
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
  
}
getData();



// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls2 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholde.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];


const getData2 = async function () {
  
  const [users, posts, albums] = await Promise.all(urls2.map(async function (url) {
    const response = await fetch(url);
    return response.json();
  })).catch((e) => console.log("oooooops!", e))
  
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
  
}
getData2();


const getData3 = async function () {

  let [users, posts, albums] = urls.map( async function (url) { await fetch(url)});
  [users, posts, albums] = [users, posts, albums].map( async function (data) {await data.json()})
  console.log("users1: ", users);
  console.log("posta2: ", posts);
  console.log("albums3: ", albums);
};

getData3();

// TODO understand the previous function and why it cannot be done as I wanted to do it...
