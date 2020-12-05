function allLongestStrings(inputArray) {
 let longestStringLength = inputArray[0].length;
 let result = [];
 for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i].length >= longestStringLength) {
   longestStringLength = inputArray[i].length;
  }
 }
 for (let j = 0; j < inputArray.length; j++) {
  if (inputArray[j].length === longestStringLength) {
   result.push(inputArray[j]);
  }
 }


 return result;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));