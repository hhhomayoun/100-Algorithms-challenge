function factorializeANumber(num) {
 if (num === 1) {
  return 1;
 }
 return num * factorializeANumber(num - 1);

}
console.log(factorializeANumber(5));
console.log(factorializeANumber(10));


// let result = 1;
// for (let i = 1; i <= num; i++) {
//  result = result * i;
// }
// return result