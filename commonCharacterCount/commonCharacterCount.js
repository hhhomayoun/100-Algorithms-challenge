function commonCharacterCount(s1, s2) {
 const s1Chars = s1.split('');
 const s2Chars = s2.split('');
 let s1o = {};
 let s2o = {};
 for (let i = 0; i < s1Chars.length; i++) {
  if (s1o.hasOwnProperty(s1Chars[i]) === false) {
   s1o[s1Chars[i]] = 1;

  } else {
   s1o[s1Chars[i]]++
  }
 }
 for (let i = 0; i < s1Chars.length; i++) {
  if (s2o.hasOwnProperty(s2Chars[i]) === false) {
   s2o[s2Chars[i]] = 1;

  } else {
   s2o[s2Chars[i]]++;
  }
 }
 console.log(s1o, s2o);
 let total = 0;
 for (let prop in s1o) {
  if (s2o.hasOwnProperty(prop)) {
   if (s2o[prop] < s1o[prop]) {
    total += s2o[prop];
   } else {
    total += s1o[prop];
   }
  }
 }
 return total;
}



console.log(commonCharacterCount('aabcc', 'adcaa'));