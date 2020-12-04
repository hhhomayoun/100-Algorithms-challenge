function absoluteValuesSumMinimization(arr) {
 let isEven = arr.length % 2 === 0;
 let median = 0
 if (isEven) {
  median = Math.floor(((arr.length / 2) + ((arr.length + 1) / 2)) / 2)

 } else {
  median = Math.floor((arr.length + 1) / 2)

 }
 return arr[median - 1]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));