function add(...n) {
 let sum = 0
 for (let i = 0; i < n.length; i++) {

  sum += n[i]
 }
 return sum
}
let result = add(2, 3, 4)

console.log(result);