function confirmEnding(str, target) {
 str = str.split('');
 target = target.split('');
 let itemsToDelete = str.length - target.length;
 str.splice(0, itemsToDelete);

 return str.toString() === target.toString();
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
