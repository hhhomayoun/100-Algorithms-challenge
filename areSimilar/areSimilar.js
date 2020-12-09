function areSimilar(a, b) {
 if (a.toString() === b.toString()) {
  return true;
 }
 let c = []
 let d = []
 for (let i = 0; i < a.length; i++) {
  if (a[i] !== b[i]) {
   c.push(a[i]);
   d.push(b[i]);
  }
 }
 d = d.reverse()
 if (c.length === 2 && (c.toString() === d.toString())) {
  return true;
 } else {
  return false;
 }

}


console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3], [1, 1, 3]));
console.log(areSimilar([1, 2, 1, 3], [1, 2, 3, 1]));