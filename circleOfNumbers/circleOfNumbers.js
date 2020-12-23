function circleOfNumbers(n, firstNumber) {

 let halfWay = n / 2;

 if (firstNumber < halfWay) {

  return (n / 2) + firstNumber;
 } else {
  return firstNumber - n / 2;
 }

}

console.log(circleOfNumbers(16, 12));