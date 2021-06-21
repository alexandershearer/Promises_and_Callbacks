// resolve food here: 
const food = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Chicken is my favorite food')
    }, 1000)
});

food.then(message => console.log(message))

// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 

// **Challenge 2** Resolve the `food` promise with that `.then()` syntax 
// and print your favorite food to the console. 