function bishopAndPawn(bishop, pawn) {
 let arrBishop = bishop.split('')
 let arrPawn = pawn.split('')
 if (bishop === pawn) {
  return true;
 }
 arrBishop[0] = arrBishop[0].charCodeAt(arrBishop[0])
 arrPawn[0] = arrPawn[0].charCodeAt(arrPawn[0])
 arrBishop[1] = parseInt(arrBishop[1])
 arrPawn[1] = parseInt(arrPawn[1])
 // console.log(arrBishop, arrPawn);
 if (arrBishop[1] === arrPawn[1] && arrBishop[0] !== arrPawn[0]) {
  return false
 }
 if (arrBishop[1] !== arrPawn[1] && arrBishop[0] === arrPawn[0]) {
  return false
 }
 while (arrBishop[1] !== arrPawn[1]) {
  if (arrBishop[1] > arrPawn[1] && arrBishop[0] >= arrPawn[0]) {
   arrBishop[1]--;
   arrBishop[0]--;


  } else if (arrBishop[1] < arrPawn[1] && arrBishop[0] <= arrPawn[0]) {
   arrBishop[1]++;
   arrBishop[0]++;

  } else if (arrBishop[1] < arrPawn[1] && arrBishop[0] >= arrPawn[0]) {
   arrBishop[1]++;
   arrBishop[0]--;
  } else if (arrBishop[1] > arrPawn[1] && arrBishop[0] <= arrPawn[0]) {
   arrBishop[1]--;
   arrBishop[0]++;
  }
 }
 // console.log(arrBishop, arrPawn);
 return arrBishop.toString() === arrPawn.toString();
}

console.log(bishopAndPawn('a1', 'c3'));