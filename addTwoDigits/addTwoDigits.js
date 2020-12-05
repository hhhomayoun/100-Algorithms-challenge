function addTwoDigits(num) {
 num = num.toString().split('')
 let sum = num.reduce((acc, curr) => parseInt(acc) + parseInt(curr))
 return sum

}

console.log(addTwoDigits(29));
