function adjacentElementsProduct(inputArray) {

 let a = inputArray[0]
 let b = inputArray[1]
 let bigestproduct = (inputArray[0] * inputArray[1])
 let i = 0;
 while (i < inputArray.length) {
  inputArray[i] * inputArray[i + 1]

  if ((inputArray[i] * inputArray[i + 1]) > bigestproduct) {
   bigestproduct = (inputArray[i] * inputArray[i + 1])
   a = inputArray[i]
   b = inputArray[i + 1]
  }
  i++
 }


 return `The largets product is ${bigestproduct} and ${a} and ${b} produced this product.`

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));