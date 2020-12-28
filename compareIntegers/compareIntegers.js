function compareIntegers(a, b) {
 const fNum = parseInt(a);
 const sNum = parseInt(b);
 return fNum > sNum ? 'greater' : fNum < sNum ? 'less' : 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));