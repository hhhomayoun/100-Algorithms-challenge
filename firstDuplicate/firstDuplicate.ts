function firstDuplicate(a: number[]): any {
 const firstDup = {};
 for (let num of a) {
  if (firstDup.hasOwnProperty(num)) {
   return num;
  }
  firstDup[num] = num
  // console.log(firstDup);
 }
 return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
