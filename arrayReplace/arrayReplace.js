function arrayReplace(inputArray, elemToReplace, substitutionElem) {
 let arr = []
 // for (let i = 0; i < inputArray.length; i++) {
 //  if (inputArray[i] === elemToReplace) {
 //   inputArray[i] = substitutionElem;

 //  } else {
 //   inputArray[i] = inputArray[i]
 //  }
 //  arr.push(inputArray[i])
 // }
 inputArray.forEach(element => {
  if (element === elemToReplace) {
   element = substitutionElem;
  }
  arr.push(element);
 });
 return arr;
}

console.log(arrayReplace([1, 2, 1], 1, 3));