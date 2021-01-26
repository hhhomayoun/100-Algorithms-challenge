function findClosestPair(numbers, sum) {
 let minDiff = numbers.length;
 for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
   if (numbers[i] + numbers[j] === sum) {
    if (j - i < minDiff) {
     minDiff = j - i;
    }
   }
  }
 }
 if (minDiff === numbers.length) {
  return -1;
 }
 return minDiff;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));