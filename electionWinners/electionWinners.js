function electionsWinners(votes, k) {

 let inTheRunnig = 0;
 const mostVotes = Math.max(...votes);
 const sortedVotes = votes.sort((a, b) => b - a);
 if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
  return 1;
 }

 votes.forEach((voteCount) => {
  if (mostVotes - voteCount < k) {
   inTheRunnig++;
  }
 })
 return inTheRunnig
}

console.log(electionsWinners([2, 3, 5, 2], 3));