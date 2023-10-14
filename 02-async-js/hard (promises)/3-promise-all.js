/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */



function waitOneSecond() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('After 1 second')
    },1000);
  });
}
var one=waitOneSecond();

function waitTwoSecond() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('After 2 second')
    },2000);
  });
}
var two=waitTwoSecond();

function waitThreeSecond() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('After 3 second')
    },3000);
  });
}
var three=waitThreeSecond();

function calculateTime() {
  var time=Date.now();
Promise.all([one,two,three]).then((message)=>{
  console.log((Date.now()-time)/1000);
  console.log("Array is="+message);
})
}

calculateTime();
