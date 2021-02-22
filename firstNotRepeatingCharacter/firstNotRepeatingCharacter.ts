function firstNotRepeatingCharacter(s: string): string {
 let chars = {};
 const arr = s.split('');
 let answer = '_';
 let indexAnswer = Number.MAX_SAFE_INTEGER;
 arr.forEach((element, index) => {
  if (!chars.hasOwnProperty(element)) {
   chars[element] = {
    count: 1,
    index
   }
  } else {
   chars[element].count++;
   chars[element].index = index;

  }
 })
 for (const key in chars) {
  if (chars[key].count === 1 && chars[key].index < indexAnswer) {
   answer = key;
   indexAnswer = chars[key].index;
  }
 }
 return answer;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
