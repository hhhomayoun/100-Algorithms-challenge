function arrayMaxConsecutiveSum(arr, k) {
 let largestSum = 0
 for (let i = 0; i <= arr.length - k; i++) {
  let a = 1;
  let count = 1;
  let rep = arr[i];
  while (count <= k && a < k) {
   rep += arr[i + a];
   a++;
   count++;
  }
  // console.log(rep);
  if (rep > largestSum) {
   largestSum = rep;
  }
 }
 return `array max consecutive sum is = ${largestSum}`;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
