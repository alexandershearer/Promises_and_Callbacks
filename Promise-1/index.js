// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("--- Oops ---");
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved successfully! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// It will trigger the catch part of the callback and send a message saying 'Promise rejected'
// **2)** What happens when you call both `resolve` and `reject`? Test this.
// Whichever one is placed first in the promise (reject or resolve) it will place the corresponding message in the terminal
// **3)** Does the order matter you call resolve and reject matter? Test this. 
// Yes it does matter which order they are called in 
// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// Nothing, it will only use the first function called