/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('This will be printed after 10 secs')
    },n);
  });
}

wait(10000).then((response)=>{
  console.log(response);
})
