function composeRanges(nums) {
 let arr = []
 let result = []
 for (let i = 0; i < nums.length; i++) {
  if (nums[i] === nums[i + 1]) {
   arr.push(nums[i])
   arr.push(nums[i + 1])
  }
  if (nums[i + 1] - nums[i] > 1) {
   arr.push(nums[i])
   arr.push(nums[i + 1])

  } if (!(nums[i + 1] - nums[i] > 1) && (i + 1) === nums.length - 1) {
   arr.push(nums[i + 1])
  }
 }
 arr.unshift(nums[0])
 for (let i = 0; i < arr.length; i += 2) {
  if (arr[i] === arr[i + 1]) {
   result.push(`${arr[i]}`)
  }
  else if (arr[i + 1] === undefined) {
   result.push(`${arr[i]}`)
  } else {
   result.push(`${arr[i]} -> ${arr[i + 1]}`)
  }
 }

 return result;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));