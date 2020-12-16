function candies(n, m) {
 for (let i = m; i >= 1; i--) {
  if (i % n === 0) {
   return i;
  }
 }

}

console.log(candies(3, 10));