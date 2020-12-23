function chunkyMonkey(arr, size) {
 let result = [];
 for (let i = 0; i < arr.length; i += size) {
  result.push(arr.slice(i, i + size));

 }
 return result;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));