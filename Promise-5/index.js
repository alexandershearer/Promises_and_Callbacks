function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeOfDay === 'breakfast') {
        resolve('My favorite food for breakfast is pancakes')
      } else if (timeOfDay === 'lunch') {
        resolve('My favorite food for lunch is a sandwich')
      } else if (timeOfDay === 'dinner') {
        resolve('My favorite food for dinner is breakfast')
      } else {
        reject('That is not a valid time of day')
      }
    })
  })

}


// Call yout function and resolve the promise here! 
whatToEat('lunch')
  .then(message => console.log(message))
  .catch(err => console.log(err))
whatToEat('breakfast')
  .then(message => console.log(message))
  .catch(err => console.log(err))
whatToEat('dinner')
  .then(message => console.log(message))
  .catch(err => console.log(err))

// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 


whatToEat('daytime')
  .then(message => console.log(message))
  .catch(err => console.log(err))
// If the `timeOfDay` is anything else reject the promise with
// the 'message' I'm not hungry right now.  