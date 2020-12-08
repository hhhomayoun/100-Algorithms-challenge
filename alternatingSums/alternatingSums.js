function alternatingSums(arr) {
 let teamOneWeight = 0;
 let teamTwoWeight = 0;
 let result = [];
 for (let i = 0; i < arr.length; i += 2) {
  teamOneWeight = teamOneWeight + arr[i]
 }
 for (let j = 1; j < arr.length; j += 2) {
  teamTwoWeight = teamTwoWeight + arr[j]
 }
 result.push(teamOneWeight);
 result.push(teamTwoWeight);
 return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))