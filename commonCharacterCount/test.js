function commonCharacterCount(s1, s2) {
 var s2Arr = s2.split('');
 var result = 0;

 for (var i = 0; i < s1.length; i++) {
  if (s2Arr.indexOf(s1[i]) !== -1) {
   s2Arr.splice(s2Arr.indexOf(s1[i]), 1);
   result++;
  }
 }

 return result;
}
console.log(commonCharacterCount('aabcc', 'adcaa'));