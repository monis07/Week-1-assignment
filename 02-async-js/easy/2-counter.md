## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function incrementCounter() {
  counter++;
  console.clear();
  console.log(counter); // You can replace this with any action you want to perform with the counter value
  setTimeout(incrementCounter, 1000); // Schedule the function to run again in 1000 milliseconds (1 second)
}

incrementCounter();








































































(Hint: setTimeout)
