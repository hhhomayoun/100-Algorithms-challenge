function arrayChange(inputArray) {
 let count = 0;

 for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i + 1] <= inputArray[i]) {
   const diff = ((inputArray[i] + 1) - inputArray[i + 1]);
   inputArray[i + 1] = inputArray[i] + 1;
   count += diff;
   console.log(inputArray);

  }
 }
 return count;
}

console.log(arrayChange([1, 1, 2]));