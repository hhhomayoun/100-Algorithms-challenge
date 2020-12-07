function almostIncreasingSequence(sequence) {
 let count = 0;
 for (let i = 0; i < sequence.length; i++) {
  if (sequence[i] <= sequence[i - 1]) {
   count++
  } if (sequence[i + 1] <= sequence[i - 1] && !(sequence[i] > sequence[i - 2])) {
   count++
  }
 }



 if (count <= 1) {
  return true;
 } else {
  return false;
 }
}


console.log(almostIncreasingSequence([1, 3, 1, 2]))
console.log(almostIncreasingSequence([1, 3, 2])) 