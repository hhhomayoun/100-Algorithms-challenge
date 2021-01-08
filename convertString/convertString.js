function convertString(s, t) {
 s = s.split('')
 let tIndex = 0
 let word = ''
 for (let i = 0; i < s.length; i++) {
  if (t[tIndex] === s[i]) {
   word = word.concat(s[i])
   tIndex++
   if (word === t) {
    return true
   }
  }
 }
 return false
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcdf'));
