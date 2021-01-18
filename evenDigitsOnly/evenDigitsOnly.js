function evenDigitsOnly(n) {
 n = n.toString().split('');
 return n.every((num) => {
  return parseInt(num) % 2 === 0;
 })

}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));