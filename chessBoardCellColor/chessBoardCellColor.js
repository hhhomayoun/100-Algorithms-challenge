function chessBoardCellColor(cell1, cell2) {
 const board = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8

 }
 const cell1x = board[cell1[0]]
 const cell1y = parseInt(cell1[1])
 const cell2x = board[cell2[0]]
 const cell2y = parseInt(cell2[1])
 let cell1Sum = cell1x + cell1y
 let cell2Sum = cell2x + cell2y
 if ((cell1Sum % 2 === 0 && cell2Sum % 2 === 0) || (cell1Sum % 2 !== 0 && cell2Sum % 2 !== 0)) {
  return true
 } else {
  return false
 }
}

console.log(chessBoardCellColor('a1', 'c3'));
console.log(chessBoardCellColor('d5', 'a7'));
