function digitDegree(n) {
 let count = 0;
 let currentNum = n;
 if (n < 10) {
  return count;
 } else {
  while (true) {
   count++;
   currentNum = getDigit(currentNum);
   if (currentNum <= 9) {
    break;
   }
  }
 }
 return count;
}
console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));

function getDigit(num) {
 return num.toString().split('').reduce((a, b) => {
  return parseInt(a) + parseInt(b)
 })
}

