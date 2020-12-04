function addBorder(picture) {
 let star = '*'
 let border = ''

 let arr = []
 for (let i = 0; i < picture.length; i++) {
  arr.push(star + picture[i] + star)
 }
 while (border.length < (picture[0].length + 2)) {
  border += star
 }
 arr.unshift(border)
 arr.push(border)
 return arr
}

console.log(addBorder(["abca", "deda"]));