function avoidObstacles(inputArray) {
 let arr = inputArray.sort();
 let resultArr = [];

 for (let i = 0; i <= inputArray[inputArray.length - 1] + 1; i++) {
  resultArr.push(i);
 }
 arr.forEach(function (e) {

  for (let j = 0; j < resultArr.length; j++) {
   if (resultArr[j] === e) {
    resultArr.splice(j, 1);
   }
  }
 })
 console.log(resultArr);
 let minJump = 0;
 for (let k = 0; k <= resultArr.length; k++) {
  if (resultArr[k + 1] - resultArr[k] > minJump) {
   minJump = resultArr[k + 1] - resultArr[k];
  }
 }
 return `MIN jump possible is = ${minJump}`;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));