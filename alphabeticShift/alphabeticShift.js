function alphabeticShift(inputString) {
 let arr = [];
 for (let i = 0; i < inputString.length; i++) {
  arr.push(inputString.charCodeAt(i));
 }
 for (let j = 0; j < arr.length; j++) {
  if (arr[j] === 122) {
   arr[j] = 97;
  } else {
   arr[j] = arr[j] + 1;
  }
  arr[j] = String.fromCharCode(arr[j]);
 }
 return arr.join('');
}

console.log(alphabeticShift('crazy'));