/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let sum1=0;
  let sum2=0;
for(let i=0;i<str1.length;i++){
  let a=str1.charCodeAt(i);
  sum1+=a;
  let b=str2.charCodeAt(i);
  sum2+=b;
}
  if(sum1===sum2)
    return true;
  else
    return false;
}

console.log(isAnagram('spar','rasp'));

module.exports = isAnagram;
