/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('After 1 second')
    },1000);
  });
}


function waitTwoSecond() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('After 2 second')
    },2000);
  });
}


function waitThreeSecond() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('After 3 second')
    },3000);
  });
}


function calculateTime() {
  var time=Date.now();
  var one=waitOneSecond();
  var two=waitTwoSecond();
  var three=waitThreeSecond();
Promise.all([one,two,three]).then((message)=>{
  console.log((Date.now()-time)/1000);
  console.log("Array is="+message);
})
}

calculateTime();
