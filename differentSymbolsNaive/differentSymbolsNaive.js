function differentSymbolsNaive(s) {
 const uniqueChars = new Set()
 s = s.split('')
 s.forEach((char) => {
  uniqueChars.add(char)
 })
 return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));


// first solution
// s = s.split('');
// const result = []
// for (let i = 0; i < s.length; i++) {
//  if (!result.includes(s[i])) {
//   result.push(s[i])
//  }
// }
// console.log(result);
// return result.length


// second solution
// const uniqueChars = {}
// s = s.split('')
// s.forEach((char) => {
//  uniqueChars[char] = 1
//  if (!uniqueChars.hasOwnProperty(char)) {
//   uniqueChars[char] = char
//  }
// })
// return Object.keys(uniqueChars).length