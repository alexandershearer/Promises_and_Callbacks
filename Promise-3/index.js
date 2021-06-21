function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === 'string') {
        resolve('hello ' + name);
      } else {
        reject('Name must be a string!');
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1000);
  });
}


// Above we have two functions that returns promises. 
// These are greet and uppercaser. 
// Notice how we chain these promises together. The 
// Result of one is then passed to the next. 

greet('alex') // Returns a Promise
  .then(greeting => uppercaser(greeting))  // Upper case the results from greet() Returns a Promise
  .then(uppercase => console.log(uppercase)) // Log the results of uppercaser()
  .catch(err => console.log(err)) // Catches an error

// Challenges: get greet() to fail by passing a non string value
greet(92458) // Returns a Promise
  .then(greeting => uppercaser(greeting))  // Upper case the results from greet() Returns a Promise
  .then(uppercase => console.log(uppercase)) // Log the results of uppercaser()
  .catch(err => console.log(err)) // Catches an error
// What happens? 
// The first promise fails and tells me it must be a string

// Challenge: get uppercaser() to fail by passing a non string value
uppercaser(43857) // Returns a Promise
  .then(uppercase => console.log(uppercase)) // Log the results of uppercaser()
  .catch(err => console.log(err)) // Catches an error
// What happens?
//It tells me the argument to uppercaser must be a string and doesnt resolve

// Challenge: Notice there is only a single .catch() at the end. 
// Explain the behavior?

// If either one of the promises fail then the catch is there to give the reject message of whichever one fails