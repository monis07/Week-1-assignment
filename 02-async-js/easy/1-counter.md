## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

var a=0;
function counter(){
  a+=1;
  console.clear();
  console.log(a);
}
setInterval(counter,1000);
