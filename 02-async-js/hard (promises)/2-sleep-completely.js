/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds){
  var time=Date.now();
  while(Date.now()-time<seconds){
  }
}
console.log("Before sleep");
sleep(3000);
console.log("This will be logged after 3 secs");
