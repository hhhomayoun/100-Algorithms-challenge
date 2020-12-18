function isCaseInsensitivePalindrome(inputString) {
 inputString = inputString.toLowerCase();
 inputString = inputString.split('');
 const a = inputString.join('');
 let reverseArr = inputString.reverse();
 const b = reverseArr.join('');
 return a === b;


}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));