function alphabetSubsequence(s) {
 let arr = [];
 let count = 0;
 for (let i = 0; i < s.length; i++) {
  arr.push(s.charCodeAt(i));
 }
 for (let j = 0; j < arr.length; j++) {
  if (arr[j] <= arr[j - 1]) {
   count++;
  }
 }
 if (count > 0) {
  return false;
 } return true;

}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
